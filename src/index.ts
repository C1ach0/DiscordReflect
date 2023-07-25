import "reflect-metadata";
import Client from "./Class/ExtendsClient"
import {bot} from "./config.json"
new Client({
    folder: {
        events: "Bot/events",
        commands: "Bot/commands"
    },
    config: {
        bot
    }
});