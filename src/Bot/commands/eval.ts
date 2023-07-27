import { EmbedBuilder, PermissionFlagsBits, ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { _Command } from "../../Annotations/_Commands";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { CommandContext } from "../../Class/CommandContext";

@_Command({
    name: "eval",
    description: "Tester un script",
    options: [
        {
            name: "script",
            description: "le script",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ]
})
export default class Eval implements CommandExecutor {
    async execute(client: ExtendsClient, ctx: CommandContext) {
        const interaction = ctx.getEvent;
        const script = interaction.options.get("script").value.toString();
        const evalEmbed = new EmbedBuilder().setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });
        let description = `    
\`\`\`js
${script}
\`\`\`\n
__Return :__
        `
        try {
            let evaled = eval(script);
            evalEmbed.setDescription(description + `
\`\`\`js
${evaled}
\`\`\`
            `)
            interaction.reply({ embeds: [evalEmbed] })
        } catch (err) {
            evalEmbed.setDescription(description+`
\`\`\`xl
${err}
\`\`\`
            `)
            interaction.reply({embeds: [evalEmbed]})
        }
    }
}