const { body, validationResult } = require('express-validator');

const store = () => {
	body('email').isEmail;
}

module.exports = {
	store
}