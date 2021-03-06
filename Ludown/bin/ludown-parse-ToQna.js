#!/usr/bin/env node
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const program = require('commander');
const fParser = require('../lib/parser');
const chalk = require('chalk');
program.Command.prototype.unknownOption = function (flag) {
    console.error(chalk.default.redBright(`\n  Unknown arguments: ${process.argv.slice(2).join(' ')}`));
    program.help();
};
program
    .name("ludown parse ToQna")
    .description(`Convert .lu file(s) into QnA Maker JSON file`)
    .usage('--in <luFile> | --lu_folder <inputFolder> [-s]')
    .option('--in <luFile>', '.lu file to parse')
    .option('-l, --lu_folder <inputFolder>', '[Optional] Folder with .lu file(s). By default ludown will only look at the current folder. -s to include subfolders')
    .option('-o, --out_folder <outputFolder>', '[Optional] Output folder for all files the tool will generate')
    .option('-s, --subfolder', '[Optional] Include sub-folders as well when looking for .lu files')
    .option('-n, --qna_name <QnA_KB_Name>', '[Optional] QnA KB name')
    .option('--verbose', '[Optional] Get verbose messages from parser')
    .parse(process.argv);
    
    if (process.argv.length < 3) {
        program.help();
    } else {
        if (!program.in && !program.lu_folder) {
            console.error(chalk.default.redBright(`\n  No .lu file or folder specified.`));
            program.help();
        } 
        fParser.handleFile(program, 'qna');
    }
