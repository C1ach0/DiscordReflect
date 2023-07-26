import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import {
    ChatInputCommandInteraction,
    EmbedBuilder
} from "discord.js"

@_Command({
    name: "ping",
    description: "Pong !"
})
export default class Ping implements CommandExecutor {
    execute(client: ExtendsClient, interaction: ChatInputCommandInteraction) {
        interaction.reply({ content: "Calcul en cours..." }).then(m4 => {
            const latency = Math.floor(Date.now() - interaction.createdTimestamp)
            const readyTimestampInSeconds = Math.floor(client.readyTimestamp / 1000);
            const embed = new EmbedBuilder()
            .setDescription(`
            Ma latence est de ${latency} ms
            Bot lancé pour la dernière fois le : <t:${readyTimestampInSeconds}:f>
            `)
            .setColor("#2b2d31")
            m4.edit({content: "", embeds: [embed]})
        })
    }
}