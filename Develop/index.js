fs = require("fs");
const questions = [
	// Question for project title section
	{
		type: "input",
		name: "title",
		message: "What is the title of your project?",
	},
	// Question for Project Description section
	{
		type: "input",
		name: "description",
		message: "Please enter a brief description of your project.",
	},
	// Question for Table Of Contents Section
	{
		type: "input",
		name: "tableOfContents",
		message: "Input Table Of Contents",
	},
	// Question for Installation section
	{
		type: "input",
		name: "installation",
		message: "What commands did you use to install the program?",
	},
	// Question for Usage Section
	{
		type: "input",
		name: "usage",
		message: "Please describe how we can use this program.",
	},
	// Question for License section
	{
		type: "input",
		name: "license",
		message: "Please enter any license information for this project.",
	},
	// Question for Contributing section
	{
		type: "input",
		name: "contributing",
		message: "Did anyone help you with this project?",
	},
	// Question for Tests section
	{
		type: "input",
		name: "tests",
		message:
			"Please enter any testing protocols that you used for your project?",
	},
	{
		type: "input",
		name: "githubUser",
		message: "Enter your GitHub Username",
	},
	{
		type: "input",
		name: "githubEmail",
		message: "Enter your GitHub Email",
	},
];

var inquirer = require("inquirer");

function generateMarkdown(data) {
	return `
  # Title: ${data.title}
  # Description: ${data.description}
  # Table of Contents: ${data.tableOfContents}
  # Installation: ${data.installation}
  # Usage : ${data.usage}
  # License: ${data.license}
  # Contributing: ${data.contributing}
  # Tests: ${data.tests}
  `;
}

inquirer
	.prompt(questions)
	//
	.then((data) => {
		console.log(data);
		data = generateMarkdown(data);
		fs.writeFile("READMEGenerated.md", data, (err) => {
			if (err) throw err;
		});
	});
