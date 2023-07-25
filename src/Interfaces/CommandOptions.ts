import {
    ApplicationCommandOptionType
} from "discord.js"

export default interface CommandOptions {
    info: {
        name: string,
        description: string,
        member_permission?: string,
        options: Options[];
    },
    run: Function;
}

interface Options {
    name: string;
    description: string;
    type: number|ApplicationCommandOptionType;
    required?: boolean;
    options?: Options[]
}