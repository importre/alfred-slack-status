'use strict';

function makeOutput() {
	const statuses = require('./statuses.json');
	return statuses.map((status, index) => Object.assign(status, {
		arg: index
	}));
}

module.exports = {
	makeOutput: makeOutput
};

