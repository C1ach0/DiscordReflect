import { AutocompleteInteraction, ApplicationCommandOptionChoiceData } from "discord.js";
import { _InteractionCommand } from "../../Annotations/_InteractionCommands";
import { InteractionCommandContext } from "../../Class/InteractionCommandContext";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/InteractionCommandExecutor";
import AutoCompletion, { Choices } from "../../Executor/AutoCompletion";


@_InteractionCommand({
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

    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
        const nb = ctx.getOption("nb").value;
        ctx.reply({ content: `UwU ${nb} !`, ephemeral: true })
    }
}