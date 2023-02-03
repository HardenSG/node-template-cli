const chalk = require('chalk')
const shell = require('shelljs')
const { askQuestions } = require('../lib/ask-question');
const execFunc = require('../lib/exec-copy-pro')
shell.config.fatal = true


module.exports = async (name,cmdObj) => {
    try {
        let version = 'completed'
        if(!name){
            const answers = await askQuestions()
            name = answers.FILENAME
            version = answers.VERSION
        }
        execFunc(name)

    } catch (error) {
        
    }
}