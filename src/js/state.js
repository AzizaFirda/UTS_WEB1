class StateManager {
  constructor() {
    this.state = {
      currentPage: CONSTANTS.PAGES.HOME,
      isLoggedIn: false,
      currentUser: null,
      isDarkMode: false,
      users: [],
      loading: false,
      error: null,
      message: null
    };

    this.subscribers = [];
    this.loadState();
  }

  // Subscribe to state changes
  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== callback);
    };
  }

  // Notify all subscribers of state change
  notifySubscribers() {
    this.subscribers.forEach(callback => callback(this.getState()));
  }

  // Update state immutably
  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notifySubscribers();
  }

  // Get current state
  getState() {
    return { ...this.state };
  }

  // Get specific state value
  getValue(key) {
    return this.state[key];
  }

  // Persist state to localStorage
  saveState() {
    StorageManager.set(CONSTANTS.STORAGE_KEYS.USERS, this.state.users);
    StorageManager.set(CONSTANTS.STORAGE_KEYS.CURRENT_USER, this.state.currentUser);
  }

  // Load state from localStorage
  loadState() {
    const savedUsers = StorageManager.get(CONSTANTS.STORAGE_KEYS.USERS);
    const savedCurrentUser = StorageManager.get(CONSTANTS.STORAGE_KEYS.CURRENT_USER);
    const savedTheme = StorageManager.get(CONSTANTS.STORAGE_KEYS.THEME);

    if (savedUsers) {
      this.state.users = savedUsers;
    } else {
      StorageManager.initialize();
      this.state.users = StorageManager.get(CONSTANTS.STORAGE_KEYS.USERS) || [];
    }

    if (savedCurrentUser) {
      this.state.currentUser = savedCurrentUser;
      this.state.isLoggedIn = true;
    }

    if (savedTheme === 'dark') {
      this.state.isDarkMode = true;
    }
  }

  // Reset state
  reset() {
    this.state = {
      currentPage: CONSTANTS.PAGES.HOME,
      isLoggedIn: false,
      currentUser: null,
      users: this.state.users,
      loading: false,
      error: null,
      message: null
    };
    this.saveState();
    this.notifySubscribers();
  }
}

// Global state instance
const stateManager = new StateManager();
