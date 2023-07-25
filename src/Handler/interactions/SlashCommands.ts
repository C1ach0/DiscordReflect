import { _Event } from "../../Annotations/_Events";
import ExtendsClient from "../../Class/ExtendsClient";
import EventExecutor from "../../Interfaces/EventExecutor";
import {
    CommandInteraction
} from "discord.js"

//const eventListenerInstance: EventListener = new EventClass();

@_Event({ event: "interactionCreate" })
export default class InteractionCreate implements EventExecutor {
  async execute(client: ExtendsClient, interaction: CommandInteraction): Promise<void|boolean|any> {
    const slashCommand = client.commands.get(interaction.commandName);
    if (interaction.type === 'APPLICATION_COMMAND_AUTOCOMPLETE') {
      if (slashCommand.autocomplete) {
        const choices = [];
        await slashCommand.autocomplete(interaction, choices);
      }
    }

    if (interaction.type === 'APPLICATION_COMMAND') {
      if (!slashCommand) return client.commands.delete(interaction.commandName);
      try {
        if (slashCommand.cooldown) {
          // Rest of the cooldown logic...
        } else {
          // Rest of the logic for handling commands without cooldown...
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}