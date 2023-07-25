import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import {
    ChatInputCommandInteraction
} from "discord.js"

@_Command({ 
    name: "ping", 
    description: "Pong !"
})
export default class Ping implements CommandExecutor {
    execute(client: ExtendsClient, interaction: ChatInputCommandInteraction) {
        console.log(interaction)
        interaction.reply({content: "Pong !"})
    }
}