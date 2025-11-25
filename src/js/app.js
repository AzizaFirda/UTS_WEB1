/* ============================================================================
   FILE: src/js/app.js - MAIN APPLICATION ENTRY POINT
   ============================================================================ */

class Application {
  constructor() {
    this.state = stateManager;
    this.auth = authService;
    this.navigation = navigation;
  }

  // Initialize application
  initialize() {
    console.log('🚀 Initializing application...');

    // Initialize storage
    StorageManager.initialize();

    // Setup theme
    this.setupTheme();

    // Setup navigation
    this.navigation.initialize();
    this.navigation.updateHeaderUI();

    // Setup event listeners
    this.setupEventListeners();

    // Subscribe to state changes
    this.state.subscribe((state) => {
      this.onStateChange(state);
    });

    console.log('✅ Application initialized successfully');
  }

  // Setup theme functionality
  setupTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = StorageManager.get(CONSTANTS.STORAGE_KEYS.THEME);

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      this.state.setState({ isDarkMode: true });
    }

    themeToggle?.addEventListener('click', () => {
      this.toggleTheme();
    });
  }

  // Toggle theme
  toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    this.state.setState({ isDarkMode: isDark });
    StorageManager.set(CONSTANTS.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');

    // Update icon
    const icon = document.querySelector('.theme-toggle i');
    if (isDark) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Setup event listeners
  setupEventListeners() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }

    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => this.handleRegister(e));
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const currentPage = this.state.getValue('currentPage');
        if (currentPage === CONSTANTS.PAGES.DETAIL) {
          this.navigation.changePage('home');
        }
      }
    });
  }

  // Handle login submission
  handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    // Clear previous error
    Components.clearMessage('loginError');

    // Attempt login
    const result = this.auth.login(username, password);

    if (result.success) {
      Components.showSuccess('loginError', result.message);
      
      setTimeout(() => {
        this.navigation.changePage(CONSTANTS.PAGES.DASHBOARD);
        this.navigation.updateHeaderUI();
        
        // Clear form
        document.getElementById('loginForm').reset();
        Components.clearMessage('loginError');
      }, 1000);
    } else {
      Components.showError('loginError', result.error);
    }
  }

  // Handle register submission
  handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    // Clear previous error
    Components.clearMessage('registerError');

    // Attempt register
    const result = this.auth.register(username, email, password, confirmPassword);

    if (result.success) {
      Components.showSuccess('registerError', result.message);
      
      setTimeout(() => {
        this.navigation.changePage(CONSTANTS.PAGES.LOGIN);
        
        // Clear form
        document.getElementById('registerForm').reset();
        Components.clearMessage('registerError');
      }, 1000);
    } else {
      Components.showError('registerError', result.error);
    }
  }

  // Handle state changes
  onStateChange(state) {
    // Update UI based on state changes
    if (state.isLoggedIn !== this.previousLoginState) {
      this.navigation.updateHeaderUI();
      this.previousLoginState = state.isLoggedIn;
    }
  }

  // Start application
  start() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initialize();
    });
  }
}

// Create and start application
const app = new Application();
app.start();

// Export for debugging
window.DEBUG = {
  app,
  stateManager,
  authService,
  navigation,
  storage: StorageManager,
  constants: CONSTANTS
};

// Log available commands
console.log('%cDebug Mode Enabled', 'font-size: 14px; color: #6366f1; font-weight: bold;');
console.log('%cAvailable commands:', 'font-size: 12px; color: #666;');
console.log('  DEBUG.stateManager.getState() - View current state');
console.log('  DEBUG.app.toggleTheme() - Toggle dark mode');
console.log('  DEBUG.storage.get("users") - View all users');
console.log('  DEBUG.authService.logout() - Logout current user');