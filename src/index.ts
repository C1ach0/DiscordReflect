import Client from "./Class/ExtendsClient"
import {token} from "./config.json"
new Client({
    folder: {
        events: "Bot/events",
        commands: "Bots/commands"
    },
    config: {
        bot: {
            token
        }
    }
});