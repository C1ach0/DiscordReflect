import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import { CommandContext } from "../../Class/CommandContext";

@_Command({ 
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
    execute(client: ExtendsClient, ctx: CommandContext) {
        const interaction = ctx.getEvent;
        const text = interaction.options.get("text").value;
        interaction.reply({content: `${interaction.member} say : ${text}`})
    }
}