const chalk = require('chalk')
const shell = require('shelljs')
const { askQuestions } = require('../lib/ask-question');
const execFunc = require('../lib/exec-copy-pro')
shell.config.fatal = true


module.exports = async (name,cmdObj) => {
    const node = 'https://gitee.com/yan-deqiang/node-express-ts-template.git'
    const frontend = 'https://github.com/HardenSG/monorepo-frontend.git'

    // const proList = ['based', 'completed', 'frontend']
    const proList = [
        {
            name: 'based',
            url: node
        },
        {
            name: 'completed',
            url: node
        },
        {
            name: 'frontend',
            url: frontend
        }
    ]

    try {
        let { FILENAME, VERSION } = await askQuestions()
        let targetReg = catchTarget(proList, VERSION)

        while(!FILENAME || !targetReg) {
            let answers = await askQuestions()
            FILENAME = answers.FILENAME
            targetReg = catchTarget(proList, answers.VERSION)
            console.log(targetReg, FILENAME);
        }

        execFunc(targetReg.url,FILENAME)

    } catch (error) {
        console.log(error);
        console.log("Something Error");
    }
}

function catchTarget(list, version) {
    return list.find(v => v.name === version)
}