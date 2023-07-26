import { EmbedBuilder, PermissionFlagsBits, ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { _Command } from "src/Annotations/_Commands";
import ExtendsClient from "src/Class/ExtendsClient";
import CommandExecutor from "src/Executor/CommandExecutor";

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
    async execute(client: ExtendsClient, interaction: ChatInputCommandInteraction) {
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
            if (typeof evaled !== 'string') {
                evaled = require('util').inspect(evaled);
            }
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