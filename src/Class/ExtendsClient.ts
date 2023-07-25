import Discord, {
    Client,
    Partials,
    Collection
} from "discord.js"
import {ClientOptions, Folder, Config} from "../Interfaces/ClientOptions";
import RegisterEvents from "../Handler/events";
import RegisterCommands from "../Handler/commands";

export default class ExtendsClient extends Client {

    public readonly Config: Config;
    public commands: Collection<String, any> = new Collection();
    public invites: Collection<String, any> = new Collection();
    public snipes: Collection<String, any> = new Collection();

    constructor(options: ClientOptions) {
        super(options?.client || {
            intents: 3249151,
            failIfNotExists: false,
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.GuildScheduledEvent,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User
            ]   
        });
        this.Config = options.config;
        this.start();
        this.startHandler(options.folder);
    }

    /**
     * Lancement du bot
     */
    start() {
        this.login(this.Config.bot.token);
    }

    startHandler(folder: Folder) {
        RegisterEvents(this, folder.events)
        RegisterCommands(this, folder.commands)
    }
    
    // Methodes utilisables dans les commandes et les events
    getGuild(guildId: string|Discord.Snowflake): Discord.Guild {
        return this.guilds.cache.get(guildId);
    }
    getChannel(guildId: string|Discord.Snowflake, channelId: string|Discord.Snowflake): Discord.GuildBasedChannel {
        return this.getGuild(guildId).channels.cache.get(channelId);
    }

}