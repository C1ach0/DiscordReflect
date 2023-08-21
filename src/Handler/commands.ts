import CommandExecutor from '../Executor/CommandExecutor';
import ExtendsClient from "../Class/ExtendsClient";
import { CommandAnnotation, _Command } from '../Annotations/_Commands';
import fs, { statSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import 'reflect-metadata';
import { Logger } from "../Class/Logger";
const logger = new Logger();

export default function RegisternteractionCommands(client: ExtendsClient, dir: string) {
    logger.sendLog("SUCCESS", "Initializations of commands")
    const CommandDir: string = join(__dirname, '..', dir);
    loadCommand(client, CommandDir);
}

function loadCommand(client: ExtendsClient, dir: string) {
    fs.readdirSync(dir).forEach(async (file) => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        if (stat.isDirectory()) {
            loadCommand(client, filePath);
        } else if (file.endsWith('.js') || file.endsWith('.ts')) {
            const CommandClass = require(filePath).default;
            const commandAnnotation: CommandAnnotation = Reflect.getMetadata('_InteractionCommand', CommandClass);
            if (commandAnnotation) {
                if(commandAnnotation.name) {
                    client.commands.set(commandAnnotation.name, CommandClass)
                }
                // const eventListenerInstance: CommandExecutor = new CommandClass();
                console.log(chalk.green(`Command '${commandAnnotation.name}' registered.`));
            } else {
                console.log(chalk.yellow(`File '${file}' does not have a valid _Command annotation.`));
            }
        } else {
            console.log("pas lu : ", file)
        }
    })
}