import ExtendsClient from "../../Class/ExtendsClient";
// import { InteractionCommandContext } from "src/Class/CommandContext";
import CommandExecutor from "../../Executor/InteractionCommandExecutor";
import { _InteractionCommand } from "../../Annotations/_InteractionCommands";
import {
    ChatInputCommandInteraction,
    CommandInteraction,
    ApplicationCommandOptionType
} from "discord.js"
import ms from "ms";
import { InteractionCommandContext } from "../../Class/InteractionCommandContext";

@_InteractionCommand({ 
    name: "mute", 
    description: "Rendre muet un membre",
    options: [
        {
            name: "définitif",
            description: "Rendre un membre muet définitivement",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "membre",
                    description: "Le membre à rendre muet",
                    type: ApplicationCommandOptionType.User,
                    required: true
                },
                {
                    name: "raison",
                    description: "La raison de la sanction",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },
        {
            name: "temporairement",
            description: "Rendre un membre muet temporairement",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "membre",
                    description: "Le membre à rendre muet",
                    type: ApplicationCommandOptionType.User,
                    required: true
                },
                {
                    name: "temps",
                    description: "Le temps de sa sanction",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "raison",
                    description: "La raison de la sanction",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        },
        {
            name: "unmute",
            description: "Ne plus rendre muet un membre",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "membre",
                    description: "Le membre à rendre muet",
                    type: ApplicationCommandOptionType.User,
                    required: true
                }
            ]
        }
    ]
})
export default class Mute implements CommandExecutor {
    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
    //     const interaction = ctx.getEvent;
    //     console.log(interaction)
    //     if(interaction.options._subcommand == "temporairement") {
    //     const user = interaction.options.get("membre").user;
    //     const target = interaction.guild.members.cache.get(user.id);
    //     const delay = ms(interaction.options.get("temps").value); // 1d -> 86.400.000ms
    //     const rson = interaction.options.get("raison").value;
    //     const reason = `${rson} | Par ${interaction.member.user.username}`

    //     try {
    //         target.timeout(delay, reason)
    //     } catch {}
    //    }
    }
}






// Description : {membre} à bien été rendu muet (temps). Il pourra de nouveau parlé (temps).
// Footer : Demandé par : (membre ayant fait la commande + sa photo de profil)
// Couleur : 2b2d31
// -----------------------------------
// Message privé :
// Description : Bonjour {membre} tu as été rendu muet sur Famille d'Or pour la raison suivante :\n```[reason]```
// Couleur : 2b2d31
// -----------------------------------
// Logs : Oui
// Description : {membre} à bien été rendu muet (temps). Il pourra de nouveau parlé (temps).
// Informations sur la sanction : 
// Modérateur ayant effectué la sanction : (modo)
// Date : (DD/MM/YYYY)
// Raison :\n```[reason]```
// Il pourra de nouveau parlé (temps) 
// Couleur : 2b2d31