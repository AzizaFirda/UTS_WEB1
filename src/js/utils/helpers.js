class Helpers {
  // Format currency to Indonesian Rupiah
  static formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  }

  // Format date to Indonesian format
  static formatDate(date, format = 'long') {
    const options = {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric' },
      time: { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }
    };

    return new Intl.DateTimeFormat('id-ID', options[format] || options.long).format(new Date(date));
  }

  // Capitalize first letter
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Generate unique ID
  static generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  // Deep clone object
  static deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map(item => this.deepClone(item));
    if (obj instanceof Object) {
      const cloned = {};
      for (const key in obj) {
        cloned[key] = this.deepClone(obj[key]);
      }
      return cloned;
    }
  }

  // Debounce function
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function
  static throttle(func, limit) {
    let isThrottled = false;
    return function(...args) {
      if (!isThrottled) {
        func(...args);
        isThrottled = true;
        setTimeout(() => isThrottled = false, limit);
      }
    };
  }

  // Sort array of objects
  static sortBy(array, key, direction = 'asc') {
    return [...array].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }

  // Group array by key
  static groupBy(array, key) {
    return array.reduce((result, item) => {
      const group = item[key];
      if (!result[group]) result[group] = [];
      result[group].push(item);
      return result;
    }, {});
  }

  // Wait for milliseconds
  static sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get URL parameters
  static getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  // Add to query string
  static updateUrl(key, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
}