/**
 * Babel Appc CLI hook
 * @license MIT
 * @author Rick Blalock
 */

'use strict';

var exec = require('child_process').exec;

exports.id = 'com.rblalock.babel';
exports.cliVersion = '>=3.2';
exports.desc = 'ES6 Babel transpiler';

/**
 * Initialize the hook
 *
 * @param {Object} logger - The logger instance
 * @param {Object} config - The CLI config object
 * @param {CLI} cli - The CLI instance
 * @param {Object} appc - The node-appc library
 */
exports.init = function init(logger, config, cli, appc) {
	cli.on('build.pre.construct', function () {
		var rv = exec('babel src --out-dir Resources -D');

		if (rv.code) {
			logger.error('Babel plugin returned the following error code: ' + rv.code);
			process.exit();
		}

		console.info('Finished converting ES6 code using Babel');
	});
};
