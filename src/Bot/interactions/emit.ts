import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/InteractionCommandExecutor";
import { _InteractionCommand } from "../../Annotations/_InteractionCommands";
import {
    ChatInputCommandInteraction, GuildMember, PermissionFlagsBits
} from "discord.js"
import { InteractionCommandContext } from "../../Class/InteractionCommandContext";

@_InteractionCommand({
    name: "emit",
    description: "Emit",
    member_permission: PermissionFlagsBits.Administrator
})
export default class Emit implements CommandExecutor {
    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
        const interaction = ctx.getEvent;
        if (interaction.member instanceof GuildMember) {
            client.emit("guildMemberAdd", interaction.member);
            interaction.reply({ content: "OK !", ephemeral: true })
        } else {
            console.error("L'objet interaction.member n'est pas un GuildMember valide.");
            interaction.reply({ content: "L'objet interaction.member n'est pas un GuildMember valide.", ephemeral: true })
        }
    }
}