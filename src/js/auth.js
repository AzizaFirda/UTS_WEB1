class AuthService {
  constructor(stateManager) {
    this.state = stateManager;
  }

  // Login dengan validasi IF yang ketat
  login(username, password) {
    // IF: Username kosong
    if (!Validators.isNotEmpty(username)) {
      return {
        success: false,
        error: 'Username tidak boleh kosong'
      };
    }

    // ELSE IF: Password kosong
    if (!Validators.isNotEmpty(password)) {
      return {
        success: false,
        error: 'Password tidak boleh kosong'
      };
    }

    // ELSE IF: Username format invalid
    if (!Validators.isValidUsername(username)) {
      return {
        success: false,
        error: 'Format username tidak valid'
      };
    }

    // ELSE IF: Password terlalu pendek
    if (!Validators.isValidPassword(password)) {
      return {
        success: false,
        error: 'Password minimal 6 karakter'
      };
    }

    // Cari user
    const users = this.state.getValue('users') || [];
    const user = users.find(u => u.username === username);

    // IF: User tidak ditemukan
    if (!user) {
      return {
        success: false,
        error: 'Username atau password salah'
      };
    }

    // IF: Password tidak sesuai
    if (user.password !== password) {
      return {
        success: false,
        error: 'Username atau password salah'
      };
    }

    // Login berhasil
    this.state.setState({
      isLoggedIn: true,
      currentUser: username,
      currentPage: CONSTANTS.PAGES.DASHBOARD
    });

    StorageManager.set(CONSTANTS.STORAGE_KEYS.CURRENT_USER, username);

    return {
      success: true,
      message: 'Login berhasil',
      user: { username: user.username, email: user.email }
    };
  }

  // Register dengan validasi IF yang ketat
  register(username, email, password, confirmPassword) {
    // IF: Username kosong
    if (!Validators.isNotEmpty(username)) {
      return { success: false, error: 'Username tidak boleh kosong' };
    }

    // ELSE IF: Username terlalu pendek
    if (username.length < CONSTANTS.VALIDATION.MIN_USERNAME_LENGTH) {
      return { success: false, error: 'Username minimal 3 karakter' };
    }

    // ELSE IF: Username tidak valid
    if (!Validators.isValidUsername(username)) {
      return { success: false, error: 'Username hanya boleh alfanumerik, dash, dan underscore' };
    }

    // IF: Email kosong
    if (!Validators.isNotEmpty(email)) {
      return { success: false, error: 'Email tidak boleh kosong' };
    }

    // ELSE IF: Email tidak valid
    if (!Validators.isValidEmail(email)) {
      return { success: false, error: 'Format email tidak valid' };
    }

    // IF: Password kosong
    if (!Validators.isNotEmpty(password)) {
      return { success: false, error: 'Password tidak boleh kosong' };
    }

    // ELSE IF: Password terlalu pendek
    if (password.length < CONSTANTS.VALIDATION.MIN_PASSWORD_LENGTH) {
      return { success: false, error: 'Password minimal 6 karakter' };
    }

    // IF: Confirm password tidak sesuai
    if (!Validators.fieldsMatch(password, confirmPassword)) {
      return { success: false, error: 'Konfirmasi password tidak cocok' };
    }

    // Cek username dan email unik
    const users = this.state.getValue('users') || [];

    // IF: Username sudah terdaftar
    if (users.find(u => u.username === username)) {
      return { success: false, error: 'Username sudah terdaftar' };
    }

    // IF: Email sudah terdaftar
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email sudah terdaftar' };
    }

    // Register berhasil - Buat user baru
    const newUser = {
      id: Helpers.generateId(),
      username,
      email,
      password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    this.state.setState({ users });
    StorageManager.set(CONSTANTS.STORAGE_KEYS.USERS, users);

    return {
      success: true,
      message: 'Pendaftaran berhasil! Silakan login',
      user: { username, email }
    };
  }

  // Logout
  logout() {
    this.state.setState({
      isLoggedIn: false,
      currentUser: null,
      currentPage: CONSTANTS.PAGES.HOME
    });

    StorageManager.remove(CONSTANTS.STORAGE_KEYS.CURRENT_USER);

    return { success: true, message: 'Logout berhasil' };
  }

  // Check if authenticated
  isAuthenticated() {
    return this.state.getValue('isLoggedIn');
  }

  // Get current user
  getCurrentUser() {
    if (!this.isAuthenticated()) return null;

    const username = this.state.getValue('currentUser');
    const users = this.state.getValue('users') || [];
    return users.find(u => u.username === username) || null;
  }

  // Update user profile
  updateProfile(updates) {
    const users = this.state.getValue('users') || [];
    const userIndex = users.findIndex(u => u.username === this.state.getValue('currentUser'));

    if (userIndex === -1) return { success: false, error: 'User tidak ditemukan' };

    users[userIndex] = { ...users[userIndex], ...updates };
    this.state.setState({ users });
    StorageManager.set(CONSTANTS.STORAGE_KEYS.USERS, users);

    return { success: true, message: 'Profil diperbarui' };
  }
}

// Global auth instance
const authService = new AuthService(stateManager);