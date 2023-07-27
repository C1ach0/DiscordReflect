import ExtendsClient from "../Class/ExtendsClient";
import { CommandContext } from "../Class/CommandContext";

// Définir l'interface pour la méthode execute
export default interface CommandExecutor {
    execute(client: ExtendsClient, interaction: CommandContext): void;
}