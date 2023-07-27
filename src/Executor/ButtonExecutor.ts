import { ButtonInteraction } from "discord.js";
import ExtendsClient from "../Class/ExtendsClient";


export default interface ButtonExecutor {
    execute(client: ExtendsClient, interaction: ButtonInteraction): void;
}