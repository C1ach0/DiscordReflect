import "reflect-metadata";
import Client from "./Class/ExtendsClient"
import {bot1, bot2} from "./config.json"
new Client({
    folder: {
        events: "Bot/events",
        commands: "Bot/commands",
        buttons: "Bot/buttons"
    },
    config: {
        bot: bot1,
        guild: {
            id: "1112109855277330473"
        }
    }
});