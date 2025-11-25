const CONSTANTS = {
  // Page Names
  PAGES: {
    HOME: 'home',
    DETAIL: 'detail',
    LOGIN: 'login',
    REGISTER: 'register',
    DASHBOARD: 'dashboard'
  },

  // Storage Keys
  STORAGE_KEYS: {
    USERS: 'users',
    THEME: 'theme',
    CURRENT_USER: 'currentUser'
  },

  // Validation Rules
  VALIDATION: {
    MIN_USERNAME_LENGTH: 3,
    MAX_USERNAME_LENGTH: 20,
    MIN_PASSWORD_LENGTH: 6,
    USERNAME_REGEX: /^[a-zA-Z0-9_-]+$/,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_REGEX: /^(\+62|0)[0-9]{9,12}$/
  },

  // Messages
  MESSAGES: {
    SUCCESS: 'Operasi berhasil',
    ERROR: 'Terjadi kesalahan',
    LOADING: 'Sedang memproses...'
  },

  // Error Codes
  ERROR_CODES: {
    USERNAME_EMPTY: 'username_empty',
    PASSWORD_EMPTY: 'password_empty',
    USER_NOT_FOUND: 'user_not_found',
    INVALID_PASSWORD: 'invalid_password',
    USERNAME_EXISTS: 'username_exists',
    EMAIL_EXISTS: 'email_exists'
  },

  // API Endpoints (for future use)
  API: {
    BASE_URL: 'http://localhost:3000/api',
    ENDPOINTS: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
      LOGOUT: '/auth/logout',
      USERS: '/users',
      TRANSACTIONS: '/transactions'
    }
  }
};