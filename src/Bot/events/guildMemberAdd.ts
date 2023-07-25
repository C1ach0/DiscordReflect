import { _Event } from "../../Annotations/_Events";
import ExtendsClient from "../../Class/ExtendsClient";
import EventExecutor from "../../Executor/EventExecutor";
import {
    EmbedBuilder,
    Events,
    GuildMember
} from "discord.js"
import ExtendsGuildMember from "../../Class/ExtendsGuildMember";

@_Event({event: Events.GuildMemberAdd})
export default class GuildMemberAdd implements EventExecutor {
    async execute(client: ExtendsClient, mmbr: GuildMember) {
        const member = new ExtendsGuildMember(mmbr);

        // Send in Welcome Channel
        const WelcomerEmbed = new EmbedBuilder()
        .setDescription(`
        # Bienvenue ${member.getEvent.user.username} !
        - Go on discute
        - Go en voc
        - Go on te love
        `)
        .setThumbnail(member.getEvent.user.displayAvatarURL())
        .setImage("https://i.pinimg.com/564x/2c/21/da/2c21da18a013cd65c0726ed0d2f3677f.jpg")
        .setTimestamp();
        member.getTextChannel("1130500390727712859").send({embeds: [WelcomerEmbed]})

        // Send in General Channel
        const GeneralEmbed = new EmbedBuilder()
        .setDescription(`
        **Bienvenue ${member.getEvent.user.username} !**
        `);
        member.getTextChannel("1130500401687445584").send({embeds: [GeneralEmbed]})
        member.getEvent.roles.add("1130500373090672670");

        // Send to MP
        const MPEmbed = new EmbedBuilder()
        .setDescription(`
        # Bienveue sur ${member.getGuild.name} !
        > J'espère que tu passera un bon moment ^^
        `)
        .setFooter({text: `*kiss*`, iconURL: member.getGuild.iconURL()});
        member.getEvent.send({embeds: [MPEmbed]})
    }
}
