import ExtendsChannel from "./Utils/ExtendsChannel";
import { Message, MessageCreateOptions, MessagePayload, MessageReplyOptions } from "discord.js";

export default class CommandContext extends ExtendsChannel {
  private event: Message;
  private options: Options;

  constructor(message: Message, options: Options) {
    super(message.guild);
    this.event = message;
    this.options = options;
  }


  get getEvent(): Message { return this.event; }
  get getCurrentChannel() { return this.event.channel };
  get getUser() { return this.event.author; }
  get getGuild() { return this.event.guild; }

  // Methods
  async getMember() {
    return await this.getGuild?.members.fetch(this.getUser.id);
  }
  getArgs(): string[] {
    let len = this.options.prefix.length + this.options.cmdName.length;
    return this.event.content.slice(len).trim().split(/ +/g);
  }
  getArg(index: number): string {
    return this.getArgs()[index];
  }
  reply(options: string | MessagePayload | MessageReplyOptions): Promise<Message> {
    return this.event.reply(options);
  }
  send(options: string | MessagePayload | MessageCreateOptions): Promise<Message> {
    return this.getCurrentChannel.send(options);
  }
}

interface Options {
  prefix: string;
  cmdName: string;
  others: any;
}