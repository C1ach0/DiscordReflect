import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/InteractionCommandExecutor";
import { _InteractionCommand } from "../../Annotations/_InteractionCommands";
import { InteractionCommandContext } from "../../Class/InteractionCommandContext";

@_InteractionCommand({ 
    name: "test", 
    description: "Test command",
    options: [
        {
            name: "text",
            description: "un text à envoyer",
            type: 3,
            required: true
        }
    ]
})
export default class Test implements CommandExecutor {
    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
        const interaction = ctx.getEvent;
        const text = interaction.options.get("text").value;
        interaction.reply({content: `${interaction.member} say : ${text}`})
    }
}