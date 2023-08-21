import ExtendsClient from "../Class/ExtendsClient";
import { InteractionCommandContext } from "../Class/InteractionCommandContext";

// Définir l'interface pour la méthode execute
export default interface InteractionCommandExecutor {
    execute(client: ExtendsClient, interaction: InteractionCommandContext): void;
}