'use strict';
const alfy = require('alfy');

const result = /\s*(\S+)\s+(.+)\s*/.exec(alfy.input);
if (result) {
	alfy.config.set(`tokens.${result[1]}`, result[2]);
}

