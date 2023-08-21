import { _Command } from "../../Annotations/_Commands";
import CommandContext from "../../Class/CommandContext";
import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";


@_Command({
    name: "test",
    description: "test",
    enabled: true
})
export default class Test implements CommandExecutor {
    execute(client: ExtendsClient, ctx: CommandContext) {
        ctx.reply("test")
    }
}