

interface ButtonAnnotation {
    
}

// Define the _Command decorator
function _Button(options?: ButtonAnnotation) {
    return function (target: any) {
        Reflect.defineMetadata('_Button', options, target);
    };
}

export { ButtonAnnotation, _Button };