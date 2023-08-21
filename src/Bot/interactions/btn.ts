import { _InteractionCommand } from "../../Annotations/_InteractionCommands";
import { InteractionCommandContext } from "../../Class/InteractionCommandContext";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/InteractionCommandExecutor";
import {
    ActionRowBuilder,
    ButtonBuilder, ButtonStyle
} from "discord.js";

@_InteractionCommand({
    name: "btnsend",
    description: "Envoyer un bouton pour le test"
})
export default class BtnSend implements CommandExecutor {
    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
        const click = new ButtonBuilder()
        .setCustomId("btn1")
        .setLabel("Click")
        .setStyle(ButtonStyle.Primary)

        const row = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(click)
        
        ctx.reply({content: "Click sur le bouton pour essayer l'event :", components: [row]})
    }
}