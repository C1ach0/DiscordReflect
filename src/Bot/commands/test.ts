import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import {
    ChatInputCommandInteraction
} from "discord.js"
import EventExecutor from "src/Executor/EventExecutor";

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
export default class Test implements CommandExecutor {
    execute(client: ExtendsClient, interaction: ChatInputCommandInteraction) {
        const text = interaction.options.get("text").value;
        interaction.reply({content: `${interaction.member} say : ${text}`})
    }
}