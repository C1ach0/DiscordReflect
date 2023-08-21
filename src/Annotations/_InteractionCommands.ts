import 'reflect-metadata';
import {
    ApplicationCommandOptionType,
    PermissionResolvable

} from "discord.js";


// Define the CommandAnnotation interface
interface InteractionCommandAnnotation {
    name: string,
    description: string,
    member_permission?: bigint|PermissionResolvable,
    options?: Options[];
    enabled?: boolean;
}


interface Options {
    name: string;
    description: string;
    type: number|ApplicationCommandOptionType;
    required?: boolean;
    autocomplete?: boolean;
    options?: Options[]
}

// Define the _Command decorator
function _InteractionCommand(options: InteractionCommandAnnotation) {
    return function (target: any) {
        Reflect.defineMetadata('_InteractionCommand', options, target);
    };
}

// Export the CommandAnnotation interface and _InteractionCommand decorator
export { InteractionCommandAnnotation, _InteractionCommand };