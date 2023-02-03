const downloadGitRepo = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')

module.exports = (fileName) => {
    const repo = 'direct:https://gitee.com/yan-deqiang/node-express-ts-template.git'
    const spinner = ora('downloading.....')
    spinner.start()
    downloadGitRepo(repo,fileName,{clone:true},(err) => {
        if(err){
            spinner.fail()
            console.log( chalk.green('Generation completed!'))
            return
        }
        spinner.succeed()
        console.log( chalk.green('Generation completed!'))
    })
}