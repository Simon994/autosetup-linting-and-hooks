# Automatically set up linting and pre-commit hook

Node scripts that will take some of the manual work out of initially setting up a project.
Specifically, the scripts will kick-off the installation and configuring of eslint and a pre-commit hook for linting.

## Using
* Clone the repo
* From the resulting local directory, run `npm link`
* Move to the directory where you want to start a new project (this should currently be an empty directory), and run `setupLinting`