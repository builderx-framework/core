const fs = require('fs');
const shell = require('shelljs');
const logError = require('../utils/logError');
const services = require('../services/app-services.json');

async function runner(folderName, packageName) {
	if (fs.existsSync(folderName)) {
		return logError(`${folderName} folder already exists!`);
	}
	const steps = [
		`echo "installing ${packageName}"`,
		`npm i ${packageName}`,
		`cp -r node_modules/${packageName} ${folderName}`,
	];

	shell.exec(steps.join(' && '));
}

module.exports = async (argvs) => {
	if (Object.keys(argvs).length === 0) {
		return console.table(services);
	}
	if (argvs.serviceName) {
		if (!services[argvs.serviceName]) {
			return logError(
				`${argvs.serviceName} app-service is not registered`
			);
		}

		if (!argvs.directory) {
			return logError(`directory not provided`);
		}

		return runner(argvs.directory, services[argvs.serviceName]);
	}
};
