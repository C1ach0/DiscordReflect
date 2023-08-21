import { CommandInteraction, ChatInputCommandInteraction, MessagePayload, InteractionReplyOptions, Snowflake, InteractionResponse, MessageCreateOptions } from "discord.js";
import ExtendsChannel from "./Utils/ExtendsChannel";

export class InteractionCommandContext extends ExtendsChannel {
    private event: ChatInputCommandInteraction;

    constructor(event: ChatInputCommandInteraction) {
        super(event.guild);
        this.event = event;
    }

    // Getter
    get getEvent(): ChatInputCommandInteraction { return this.event };
    get getCurrentChannel() { return this.event.channel };
    get getUser() { return this.event.user; }
	get getGuild() { return this.event.guild; }
    get getSubCommand() { 
        return this.event.options.data
    }

    // Methods
    async getMember() { return await this.getGuild?.members.fetch(this.getUser.id); }
    getOption(value: string) {
        return this.event.options.get(value)
    }
    reply(options: string | MessagePayload | InteractionReplyOptions): Promise<InteractionResponse> {
        return this.event.reply(options);
    }
    send(options: {reply: string | MessagePayload | InteractionReplyOptions, channel: string | MessagePayload | MessageCreateOptions}) {
        this.reply(options.reply);
        this.getCurrentChannel.send(options.channel);
    }
}