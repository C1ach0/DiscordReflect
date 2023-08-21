import 'reflect-metadata';


// Define the CommandAnnotation interface
interface CommandAnnotation {
    name: string;
    aliases?: string[];
    description: string;
    usage?: string;
    enabled?: boolean;
}


// Define the _Command decorator
function _Command(options: CommandAnnotation) {
    return function (target: any) {
        Reflect.defineMetadata('_Command', options, target);
    };
}

// Export the CommandAnnotation interface and _InteractionCommand decorator
export { CommandAnnotation, _Command };