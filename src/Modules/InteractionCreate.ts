import { CommandAnnotation } from "src/Annotations/_Commands";
import { _Event } from "../Annotations/_Events";
import ExtendsClient from "../Class/ExtendsClient";
import EventExecutor from "../Executor/EventExecutor";
import CommandExecutor from "src/Executor/CommandExecutor";
import {
  Interaction
} from "discord.js"

//const eventListenerInstance: EventListener = new EventClass();

@_Event({ event: "interactionCreate" })
export default class InteractionCreate implements EventExecutor {
  async execute(client: ExtendsClient, interaction: Interaction): Promise<void | boolean | any> {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
      const commandInstance: CommandExecutor = new command();
      // const commandAnnotation: CommandAnnotation = Reflect.getMetadata('_Event', command);
      commandInstance.execute(client, interaction)
    }
  }
}