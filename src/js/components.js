class Components {
  // Show error message
  static showError(elementId, message) {
    const errorDiv = document.getElementById(elementId);
    if (errorDiv) {
      errorDiv.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i> ${message}</div>`;
      errorDiv.style.display = 'block';
    }
  }

  // Show success message
  static showSuccess(elementId, message) {
    const errorDiv = document.getElementById(elementId);
    if (errorDiv) {
      errorDiv.innerHTML = `<div class="success-message"><i class="fas fa-check-circle"></i> ${message}</div>`;
      errorDiv.style.display = 'block';
    }
  }

  // Clear message
  static clearMessage(elementId) {
    const errorDiv = document.getElementById(elementId);
    if (errorDiv) {
      errorDiv.innerHTML = '';
      errorDiv.style.display = 'none';
    }
  }

  // Create card element
  static createCard(title, description, icon, dataDetail) {
    return `
      <div class="card" data-detail="${dataDetail}">
        <div class="card-icon"><i class="fas ${icon}"></i></div>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
    `;
  }

  // Create stat card
  static createStatCard(label, icon, value) {
    return `
      <div class="stat-card">
        <div class="stat-label"><i class="fas ${icon}"></i> ${label}</div>
        <div class="stat-value">${value}</div>
      </div>
    `;
  }

  // Create badge
  static createBadge(text, type = 'primary') {
    return `<span class="badge badge-${type}">${text}</span>`;
  }

  // Show loading spinner
  static showSpinner(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = '<div class="spinner"></div>';
    }
  }

  // Create alert
  static createAlert(message, type = 'success') {
    return `
      <div class="alert alert-${type}">
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
      </div>
    `;
  }
}