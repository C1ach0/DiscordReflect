import { CommandInteraction, ChatInputCommandInteraction, MessagePayload, InteractionReplyOptions } from "discord.js";

export class CommandContext {
    private event: ChatInputCommandInteraction;

    constructor(event: ChatInputCommandInteraction) {
        this.event = event;
    }
    
    get getEvent(): ChatInputCommandInteraction { return this.event };
    get getChannel() { return this.event.channel };
    get getUser() { return this.event.user; }
	get getGuild() { return this.event.guild; }
    get getSubCommand() { 
        return this.event.options.data
    }
    async getMember() { return await this.getGuild?.members.fetch(this.getUser.id); }
    getOption(value: string) {
        return this.event.options.get(value)
    }
    reply(options: string | MessagePayload | InteractionReplyOptions): void {
        this.event.reply(options);
    }
}