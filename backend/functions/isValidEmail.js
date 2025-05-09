function isValidEmail(email) {
    const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;
    return regex.test(email);
}

module.exports = isValidEmail