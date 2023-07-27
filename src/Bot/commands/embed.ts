import ExtendsClient from "../../Class/ExtendsClient";
import CommandExecutor from "../../Executor/CommandExecutor";
import { _Command } from "../../Annotations/_Commands";
import {
    ChatInputCommandInteraction, EmbedBuilder, PermissionFlagsBits, ApplicationCommandOptionType
} from "discord.js"
import { CommandContext } from "../../Class/CommandContext";

const data = ["Default", "Green", "Blue", "Purple", "LuminousVividPink", "Gold", "Orange", "Red", "Grey", "LightGrey", "Navy", "Yellow", "Aqua", "White", "Greyple", "Black", "Blurple", "Green", "Yellow", "Fuchsia", "Red"]

@_Command({
    name: "embed",
    description: "Créer un message embed",
    member_permission: PermissionFlagsBits.ManageMessages,
    options: [
        {
            name: 'create',
            description: 'Créer un embed',
            type: 1,
            options: [
                // Default Settings
                {
                    name: 'channel',
                    description: 'Le salon dans lequel l\'embed sera',
                    type: ApplicationCommandOptionType.Channel,
                    required: true,
                },
                // {
                //     name: 'color',
                //     description: 'La couleur (voir /embed info)',
                //     type: ApplicationCommandOptionType.String,
                //     required: false
                // },
                // Author Settings
                {
                    name: 'author',
                    description: 'L\'auteur',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                {
                    name: 'author_img',
                    description: 'L\'image de l\'auteur (url img/gif)',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                // Title
                {
                    name: 'title',
                    description: 'Le titre',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                // Thumbnail
                {
                    name: 'thumbnail',
                    description: 'L\'image du thumbnail (url img/gif)',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                // Description
                {
                    name: 'description',
                    description: 'Le contenu du message',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                // Image
                {
                    name: 'image',
                    description: 'L\'image principale (url img/gif)',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                // Footer Settings
                {
                    name: 'footer',
                    description: 'Le footer',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
                {
                    name: 'footer_img',
                    description: 'L\'image du footer (url img/gif)',
                    type: ApplicationCommandOptionType.String,
                    required: false,
                },
            ]
        },
        {
            name: 'info',
            description: 'Connaitre le fonctionnement de l\'embed',
            type: 1,
        },
        {
            name: 'json',
            description: 'Envoyer un embed via le json',
            type: 1,
            options: [
                {
                    name: "json",
                    description: "Le contenu de l'embed",
                    type: 3,
                    required: true
                }
            ]
        }
    ],
})
export default class Embed implements CommandExecutor {
    execute(client: ExtendsClient, ctx: CommandContext) {
        const interaction = ctx.getEvent;
        if (interaction.options.getSubcommand() === 'create') {
            const channelId = interaction.options.get("channel").channel.id;
            const channel = interaction.guild.channels.cache.get(channelId);
            const author = interaction.options.get("author")?.value.toString();
            const authorImg = interaction.options.get("author_img")?.value.toString();
            const title = interaction.options.get("title")?.value.toString();
            const thumbnail = interaction.options.get("thumbnail")?.value.toString();
            const description = interaction.options.get("description")?.value.toString();
            const image = interaction.options.get("image")?.value.toString();
            const footer = interaction.options.get("footer")?.value.toString();
            const footerImg = interaction.options.get("footer_img")?.value.toString();
            //const color = interaction.options.get("color").value.toString();
            if (author == null && authorImg == null && title == null && thumbnail == null && description == null && image == null && footer == null && footerImg == null) return interaction.reply({ content: "Vous ne pouvez pas créer un embed sans information !", ephemeral: true })

            // Embed Build
            const embed = new EmbedBuilder();
            if (author) embed.setAuthor({ name: author, iconURL: authorImg });
            if (title) embed.setTitle(title);
            if (thumbnail) embed.setThumbnail(thumbnail);
            if (description) embed.setDescription(description.split("{r}").join("\n"));
            if (image) embed.setImage(image);
            embed.setColor("Fuchsia");
            if (footer) embed.setFooter({ text: footer, iconURL: footerImg });

            // Send Embed
            if (channel.isTextBased()) {
                channel.send({ embeds: [embed] })
                interaction.reply({ content: "Embed envoyer avec succès !", ephemeral: true })
            }

        }
        else if (interaction.options.getSubcommand() === 'info') {
            const embed = new EmbedBuilder()
                .setTitle("Informations sur la création d'un Embed")
                .setDescription(`
- Utilisé \`{r}\` pour revenir à la ligne dans la description
- Il faut le text de l'auteur et footer pour affiché leurs images
- Pour les images vous devez utilisé des url ciblant vers une image ou un gif
- Vous pouvez utilisé les emotes du serveurs ou faire des mentions :
note : Les mentions ne fonctionne que dans la description
\`\`\`
<@user_id> : mention d'un membre
<@&role_id> : mention d'un rôle
<#channel_id> : mention d'un salon
:emote_name: : emote (ajoutez un \\ devant l'emote pour obtenir)
[name](url) : mettre un lien dans un texte
\`\`\`
- Vous ne pouvez pas créer de block de code comme celui au dessus
            `)
                .setImage("https://i.imgur.com/QQKWtq7.png")
            interaction.reply({ embeds: [embed] })
        } else if (interaction.options.getSubcommand() === "json") {
            const embed = interaction.options.get("json").value.toString();
        }
    }
}