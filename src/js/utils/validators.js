class Validators {
  // Email validation
  static isValidEmail(email) {
    return CONSTANTS.VALIDATION.EMAIL_REGEX.test(email);
  }

  // Username validation
  static isValidUsername(username) {
    const len = username.length;
    if (len < CONSTANTS.VALIDATION.MIN_USERNAME_LENGTH || len > CONSTANTS.VALIDATION.MAX_USERNAME_LENGTH) {
      return false;
    }
    return CONSTANTS.VALIDATION.USERNAME_REGEX.test(username);
  }

  // Password validation
  static isValidPassword(password) {
    return password.length >= CONSTANTS.VALIDATION.MIN_PASSWORD_LENGTH;
  }

  // Phone number validation
  static isValidPhoneNumber(phone) {
    return CONSTANTS.VALIDATION.PHONE_REGEX.test(phone);
  }

  // Not empty validation
  static isNotEmpty(value) {
    return value && value.trim().length > 0;
  }

  // Fields match validation
  static fieldsMatch(field1, field2) {
    return field1 === field2;
  }

  // Currency validation
  static isValidCurrency(value) {
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
  }

  // URL validation
  static isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Check if string is number
  static isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
}