const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const CLIENT_OUTPUT_DIR = path.join(ROOT_DIR, 'public');
const SERVER_OUTPUT_DIR = path.join(ROOT_DIR, 'build');


module.exports = {
	ROOT_DIR,
	CLIENT_OUTPUT_DIR,
	SERVER_OUTPUT_DIR	
};
