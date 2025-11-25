class StorageManager {
  // Set item in localStorage
  static set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error('Storage set error:', error);
      return false;
    }
  }

  // Get item from localStorage
  static get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  }

  // Remove item from localStorage
  static remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Storage remove error:', error);
      return false;
    }
  }

  // Clear all localStorage
  static clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage clear error:', error);
      return false;
    }
  }

  // Get all keys
  static keys() {
    return Object.keys(localStorage);
  }

  // Get storage size
  static getSize() {
    let total = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        total += localStorage[key].length + key.length;
      }
    }
    return total;
  }

  // Check if key exists
  static exists(key) {
    return localStorage.getItem(key) !== null;
  }

  // Initialize storage with default values
  static initialize() {
    if (!this.exists(CONSTANTS.STORAGE_KEYS.USERS)) {
      const defaultUsers = [
        { id: '1', username: 'bendahara', password: '123456', email: 'bendahara@himatif.com' },
        { id: '2', username: 'admin', password: 'admin123', email: 'admin@himatif.com' }
      ];
      this.set(CONSTANTS.STORAGE_KEYS.USERS, defaultUsers);
    }

    if (!this.exists(CONSTANTS.STORAGE_KEYS.THEME)) {
      this.set(CONSTANTS.STORAGE_KEYS.THEME, 'light');
    }
  }
}