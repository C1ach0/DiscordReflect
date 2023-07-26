import { _Event } from "../../Annotations/_Events";
import ExtendsClient from "../../Class/ExtendsClient";
import EventExecutor from "../../Executor/EventExecutor";
import {
    Events, Message, EmbedBuilder, Snowflake, GuildMember,
    version as discordjsVersion
} from "discord.js"
import {
    cpu
} from 'node-os-utils';

const developpers = [
    {id: "710941714801492018", pseudo: "atsushi_497"},
    {id: "874703177377792072", pseudo: "type_lexou"},
    {id: "358629612584173568", pseudo: "kuracho"},
]
@_Event({event: Events.MessageCreate})
export default class MessageCreate implements EventExecutor {
    async execute(client: ExtendsClient, message: Message) {
        if (message.content != `<@${client.Config.bot.id}>`) return;
        const embed = new EmbedBuilder()
            .setDescription(`
            <:personne:1114899192133976104> \`\`-\`\` **__Informations globales du bot :__**\n
\`\`\`
Nom :       ➜ Famille d'Or
ID :        ➜ 1069651521047904358
Membres :   ➜ ${message.guild.members.cache.filter(m => !m.user.bot).size}
\`\`\`\n
            <:nbgagnant:1114899199633408022> \`\`-\`\` **__Contributeurs :__**

__Développeurs :__

\`\`-\`\` ${getDev(message, developpers[0].id) ? getDev(message, developpers[0].id).user : developpers[0].pseudo} <a:love:1132713552193519827>
\`\`-\`\` ${getDev(message, developpers[1].id) ? getDev(message, developpers[1].id).user : developpers[1].pseudo} <a:love:1132713552193519827>
\`\`-\`\` ${getDev(message, developpers[2].id) ? getDev(message, developpers[2].id).user : developpers[2].pseudo} <a:love:1132713552193519827>

            <:Assistance:1112705804752138250> \`\`-\`\` **__Informations avancées du bot :__**\n
\`\`\`
OS :                ➜ ${process.platform} ${process.arch}
Cores :             ➜ ${cpu.count()}
CPU Usage :         ➜ ${await cpu.usage()} %
RAM Usage :         ➜ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
Version Node :      ➜ ${process.version.replace("v", "")}
Version DiscordJS : ➜ ${discordjsVersion}

Nombre de commande que je possède : ${client.commands.size}
Je suis codé en Typescript ( TS )
Besoin d'infos sur les commandes : /help
\`\`\`
            <:link1:1114899194747035710> \`\`-\`\` **__Liens utiles :__**

            [Freelance de kuracho](https://rosydev.fr/)
            [Hébergeur de atsushi-497]()
            [Serveur discord de type_lexou](https://discord.gg/sYzarVXkXn)
`)
            .setColor("#2b2d31")
        message.reply({ embeds: [embed] })
    }
}

function getDev(message: Message, uId: string|Snowflake): GuildMember|null {
    return message.guild.members.cache.get(uId);
}