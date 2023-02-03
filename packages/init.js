const { program } = require('commander');
const chalk = require('chalk')


// 初始化版本，我们直接获取package.json里面的版本号就可以了
program.version(require('../package.json').version);
//开始添加命令 [name] 说明这个参数是可选的，我们想做到兼容不同的使用方法所以把这个参数设置未可选
//.description里面可以写上这个命名的一些描述，当用户fc-vue help add-page 的时候可以提供帮助文档
//.option 用来添加可选的参数
//.action用来响应用户的输入，这里我们单独用一个文件./commands/add-page来处理
program
	.command('cra [name]')
	.description(
		'INTRODUCE: This is a project template based on NODE + TS + EXPRESS'
	)
    .option('-b,--based','create a base mode')
    .option('-c,--completed','create a completed mode')
	.action(require('./command/create-pro.js'))
	.on('--help', () => {
	    console.log(chalk.green(`
    Your can use this command: "demo-cli cra" 
    And Press Enter to proceed to the next step
        `));
	});
//格式化命令行参数
program.parse(process.argv);