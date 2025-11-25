class Navigation {
  constructor(stateManager) {
    this.state = stateManager;
  }

  // Change page
  changePage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
      targetPage.classList.add('active');
      this.state.setState({ currentPage: pageName });
    } else {
      console.warn(`Page ${pageName} not found`);
    }
  }

  // Show detail page
  showDetail(key) {
    const detail = DETAIL_DATA[key];

    if (!detail) {
      console.warn(`Detail ${key} not found`);
      return;
    }

    document.getElementById('detailTitle').textContent = detail.title;
    document.getElementById('detailContent').textContent = detail.content;
    this.changePage('detail');
  }

  // Update header UI
  updateHeaderUI() {
    const userDisplay = document.getElementById('userDisplay');
    const logoutBtn = document.getElementById('logoutBtn');
    const dashboardUser = document.getElementById('dashboardUser');

    if (this.state.getValue('isLoggedIn')) {
      const currentUser = this.state.getValue('currentUser');
      userDisplay.textContent = `Selamat datang, ${currentUser}`;
      userDisplay.style.display = 'inline';
      logoutBtn.style.display = 'inline-flex';
      if (dashboardUser) dashboardUser.textContent = currentUser;
    } else {
      userDisplay.style.display = 'none';
      logoutBtn.style.display = 'none';
    }
  }

  // Initialize navigation event listeners
  initialize() {
    // Card clicks
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', (e) => {
        const detail = card.dataset.detail;
        if (detail) this.showDetail(detail);
      });
    });

    // Login CTA
    document.getElementById('loginCta')?.addEventListener('click', () => {
      this.changePage('login');
    });

    // Back buttons
    document.getElementById('backFromDetail')?.addEventListener('click', () => {
      this.changePage('home');
    });

    // Auth navigation
    document.getElementById('toRegister')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.changePage('register');
    });

    document.getElementById('toLogin')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.changePage('login');
    });

    document.getElementById('backToHome')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.changePage('home');
    });

    document.getElementById('backToHome2')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.changePage('home');
    });

    // Logout
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
      const result = authService.logout();
      if (result.success) {
        this.changePage('home');
        this.updateHeaderUI();
      }
    });
  }
}

// Global navigation instance
const navigation = new Navigation(stateManager);