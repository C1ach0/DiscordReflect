import ExtendsClient from "../Class/ExtendsClient";
import { ChatInputCommandInteraction } from "discord.js";

// Définir l'interface pour la méthode execute
export default interface CommandExecutor {
    execute(client: ExtendsClient, interaction: ChatInputCommandInteraction): void;
}