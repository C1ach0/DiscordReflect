import {
    GuildMember, Snowflake
} from "discord.js";

import ExtendsChannel from "./Utils/ExtendsChannel";

export default class ExtendsGuildMember extends ExtendsChannel {
    private event: GuildMember;

    constructor(event: GuildMember) {
        super(event.guild);
        this.event = event;
    }

    get getEvent() {
        return this.event;
    }
}