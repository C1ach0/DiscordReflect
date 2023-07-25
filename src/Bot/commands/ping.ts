import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Interfaces/CommandExecutor";
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
        interaction.reply({content: "Pong !"})
    }
}