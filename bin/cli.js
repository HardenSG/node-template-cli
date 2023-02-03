#!/usr/bin/env node
const chalk = require('chalk')
const curVersion = process.versions.node
const majorVersion = curVersion.split('.')[0]
if(majorVersion < 15) {
    console.error(chalk.red(`
        You are running the ${curVersion} version 
        This Command Line Interface requires Node 15 Or higher
        Please update your version of Node
    `))
    process.exit(1)
}
require('../packages/init')