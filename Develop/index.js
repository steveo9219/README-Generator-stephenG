const questions = [];
var inquirer = require("inquirer");
fs = require("fs");
fs.writeFile("READMEGenerated.md", "hello", function (err, data) {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the title?",
				name: "Title of README",
			},
		])
		.then(function (data) {
			console.log(data);
			// if (response.confirm === response.password) {
			// 	console.log("Success!");
			// } else {
			// 	console.log("You forgot your password already?!");
			// }
		});
});
// function init() {}

// init();
