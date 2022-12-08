const command = require('../actions/add-app-service');

module.exports = async (program) => {
	// hello-world project command
	program
		.command('add:service:app-service')
		.option('--service-name [value]', 'service name to be provided')
		.option('--directory [value]', 'directory to be provided')
		.description('Add an app service')
		.action(command);
};
