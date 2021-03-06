"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const program = require("commander");
program.Command.prototype.unknownOption = function (flag) {
    console.error(chalk.default.redBright(`Unknown arguments: ${process.argv.slice(2).join(' ')}`));
    program.help();
};
program
    .name('msbot connect')
    .command('azure', 'connect to Azure Bot Service')
    .command('dispatch', 'connect to a Dispatch model')
    .command('endpoint', 'connect to endpoint')
    .command('file', 'connect to file to the bot')
    .command('luis', 'connect to a LUIS application')
    .command('qna', 'connect to QNA a service');
const args = program.parse(process.argv);
// args should be undefined is subcommand is executed
if (args) {
    const a = process.argv.slice(2);
    console.error(chalk.default.redBright(`Unknown arguments: ${a.join(' ')}`));
    program.help();
}
//# sourceMappingURL=msbot-connect.js.map