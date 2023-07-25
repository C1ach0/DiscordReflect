import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Interfaces/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import {
    ChatInputCommandInteraction
} from "discord.js"
import EventExecutor from "src/Interfaces/EventExecutor";

@_Command({ 
    name: "test", 
    description: "Test command",
    options: [
        {
            name: "text",
            description: "un text à envoyer",
            type: 3,
            required: true
        }
    ]
})
export default class Ping implements CommandExecutor {
    execute(client: ExtendsClient, interaction: ChatInputCommandInteraction) {
        interaction.reply({content: "Pong !"})
    }
}