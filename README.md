# Handler Discord avec Annotations et Reflect

Ce projet est un handler Discord développé en TypeScript qui utilise `Reflect` pour gérer les annotations sur les commandes et les événements. Il permet une organisation efficace des commandes et des événements grâce à une utilisation innovante des métadonnées TypeScript.

## Fonctionnalités

- Gestion des commandes interactives avec annotations
- Gestion des événements Discord avec annotations
- Utilisation de `Reflect` pour les métadonnées et les annotations

## Installation

```bash
git clone https://github.com/C1ach0/DiscordReflect.git

cd DiscordReflect

npm install
```

## Utilisation des Annotations

### Interface pour les Commandes d'Interaction

L'interface `InteractionCommandAnnotation` est utilisée pour annoter les commandes.

```typescript
interface InteractionCommandAnnotation {
    name: string;
    description: string;
    member_permission?: bigint | PermissionResolvable;
    options?: Options[];
    enabled?: boolean;
}
```

### Exemple d'Annotation pour une Commande d'Interaction

Utilisez l'annotation `_InteractionCommand` pour définir une nouvelle commande d'interaction.

```typescript
@_InteractionCommand({ 
    name: "test", 
    description: "Test command",
    options: [
        {
            name: "text",
            description: "un text à envoyer",
            type: 3,
            required: true
        }
    ]
})
export default class Test implements CommandExecutor {
    execute(client: ExtendsClient, ctx: InteractionCommandContext) {
        // Le code de votre commande ici
    }
}
```
***

### Interface pour les Événements

L'interface `EventAnnotation` est utilisée pour annoter les événements Discord.

```typescript
interface EventAnnotation {
    event: string | Events;
}
```

### Exemple d'Annotation pour un Événement

Utilisez l'annotation `_Event` pour définir un nouvel événement.

```typescript
@_Event({event: Events.ClientReady})
export default class Ready implements EventExecutor {
    execute(client: ExtendsClient): void {
        console.log(`Bot lancé : ${client.user.username}`);
    }
}
```

***

## Licence

Ce projet est sous licence MIT.
