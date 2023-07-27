import ExtendsClient from "../Class/ExtendsClient";
import fs, { statSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import 'reflect-metadata';
import { Routes } from 'discord-api-types/v9';
import { REST } from '@discordjs/rest';
import { Logger } from "../Class/Logger";
const logger = new Logger();

export default function RegisterButtons(client: ExtendsClient, dir: string) {
    const ButtonDir: string = join(__dirname, '..', dir);
    LoadButton(client, ButtonDir)
}

function LoadButton(client: ExtendsClient, dir: string) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        if (stat.isDirectory()) {
            LoadButton(client, filePath);
        } else if (file.endsWith(".js") || file.endsWith(".ts")) {
            const ButtonClass = require(filePath).default;
            const buttonAnnotations = Reflect.getMetadata('_Command', ButtonClass);
        }
    })
}