import "reflect-metadata";
import Client from "./Class/ExtendsClient"
import {bot1, bot2} from "./config.json"
new Client({
    folder: {
        events: "Bot/events",
        commands: "Bot/commands",
        interactions: {
            buttons: "Bot/buttons",
            commands: "Bot/interactions"
        }
    },
    config: {
        bot: bot1,
        guild: {
            id: "1112109855277330473"
        }
    }
});