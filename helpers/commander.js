const { Command } = require('commander');
const { getVar } = require('./variables');
const { version } = require('../package.json');
const commands = require('../commands');

const program = new Command();
const commander = {};

// initialize the bx command
commander.init = async () => {
	if (process.argv.length === 2) {
		process.argv.push('-h');
	}
	program
		.name('bx')
		.version('BX core Version ' + version)
		.description('BuilderX core');
};

// adds all the commands from the directory
commander.addCommands = async () => {
	commands().forEach((cmd) => cmd(program));
};

// parses and closes the command
commander.close = async () => {
	program.parseAsync();
};

module.exports = commander;
