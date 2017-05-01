'use strict';
const statuses = require('./statuses.json');

module.exports = statuses
	.map((status, index) => Object.assign(status, {
		arg: index
	}));

