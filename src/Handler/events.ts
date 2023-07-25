import ExtendsClient from "../Class/ExtendsClient";
import EventExecutor from "../Interfaces/EventExecutor";
import { EventAnnotation, _Event } from "../Annotations/_Events";
import fs, { existsSync, mkdirSync, statSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import 'reflect-metadata';
// import { Logger } from "../Class/Logger";
// const logger = new Logger();

export default function RegisterEvents(client: ExtendsClient, dir: string) {
    if (!existsSync('./Build/Events')) {
        mkdirSync('./Build/Events');
    }
    const EventDir: string = join(__dirname, '..', dir);
    loadEvent(client, EventDir);
    const InteractionDir: string = join(__dirname, '.', 'interactions');
    loadEvent(client, InteractionDir);
}


function loadEvent(client: ExtendsClient, dir: string) {
    fs.readdirSync(dir).forEach(async (file) => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        if (stat.isDirectory()) {
            loadEvent(client, filePath);
        } else if (file.endsWith('.js') || file.endsWith('.ts')) {
            const EventClass = require(filePath).default;
            const eventAnnotation: EventAnnotation = Reflect.getMetadata('_Event', EventClass);
            if (eventAnnotation) {
                const eventListenerInstance: EventExecutor = new EventClass();

                client.on(eventAnnotation.event, async (...args: any[]) => {
                    try {
                        eventListenerInstance.execute(client, ...args);
                    } catch (error) {
                        console.error(`Error executing event '${eventAnnotation.event}':`, error);
                    }
                });
                // console.log(chalk.green(`Event Listener '${eventAnnotation.event}' registered.`));
            } else {
                // console.log(chalk.yellow(`File '${file}' does not have a valid _Event annotation.`));
            }
        }
    })
    // logger.sendLog("SUCCESS", "Initialisations des Events")
};

