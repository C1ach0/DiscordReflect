import { _Command } from "../../Annotations/_Commands";
import { CommandContext } from "../../Class/CommandContext";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import {
    ActionRowBuilder,
    ButtonBuilder, ButtonStyle
} from "discord.js";

@_Command({
    name: "btnsend",
    description: "Envoyer un bouton pour le test"
})
export default class BtnSend implements CommandExecutor {
    execute(client: ExtendsClient, ctx: CommandContext) {
        const click = new ButtonBuilder()
        .setCustomId("btn1")
        .setLabel("Click")
        .setStyle(ButtonStyle.Primary)

        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(click)
        
        ctx.reply({content: "Click sur le bouton pour essayer l'event :", components: [row]})
    }
}