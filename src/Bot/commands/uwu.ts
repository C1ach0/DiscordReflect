import { AutocompleteInteraction, ApplicationCommandOptionChoiceData } from "discord.js";
import { _Command } from "../../Annotations/_Commands";
import { CommandContext } from "../../Class/CommandContext";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import AutoCompletion, { Choices } from "../../Executor/AutoCompletion";


@_Command({
    name: "uwu",
    description: "send uwu",
    options: [
        {
            name: 'nb',
            description: 'le nb apres le uwu',
            type: 3,
            required: true,
            autocomplete: true
        }
    ]
})
export default class UwU implements CommandExecutor, AutoCompletion {
    autoCompletion(interaction: AutocompleteInteraction, choices: ApplicationCommandOptionChoiceData[]): void {
        choices = [
            { name: "1", value: "1" },
            { name: "2", value: "2" },
            { name: "3", value: "3" },
        ]
        interaction.respond(choices).catch(console.error)
    }

    execute(client: ExtendsClient, ctx: CommandContext) {
        const nb = ctx.getOption("nb").value;
        ctx.reply({ content: `UwU ${nb} !`, ephemeral: true })
    }
}