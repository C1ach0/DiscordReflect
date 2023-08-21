import CommandContext from "../Class/CommandContext";
import ExtendsClient from "../Class/ExtendsClient";

export default interface CommandExecutor {
    execute(client: ExtendsClient, ctx: CommandContext);
}