const downloadGitRepo = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const path = require('path')
const fs = require('fs')

const deleteFolder = (path) => {
    let files = []
    if(fs.existsSync(path)){
        files = fs.readdirSync(path)
        files.forEach((file,index) => {
            const curPath = `${path}/${file}`
            if(fs.statSync(curPath).isDirectory()){
                deleteFolder(curPath)
            }else{
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path) 
    }
}    

module.exports = (fileName) => {
    const repo = 'direct:https://gitee.com/yan-deqiang/node-express-ts-template.git'
    const spinner = ora('downloading.....')
    spinner.start()
    downloadGitRepo(repo,fileName,{clone:true},(err) => {
        try {
            const parPath = path.join(process.cwd(),`/${fileName}/.git`)
            deleteFolder(parPath)
        } catch (error) {
            
        }
        if(err){
            spinner.fail()
            console.log( chalk.green('Generation completed!'))
            return
        }
        spinner.succeed()
        console.log( chalk.green('Generation completed!'))
    })
}