import { _Event } from "../../Annotations/_Events";
import ExtendsClient from "../../Class/ExtendsClient";
import EventExecutor from "../../Executor/EventExecutor";
import {
    Events
} from "discord.js"

@_Event({event: Events.ClientReady})
export default class Ready implements EventExecutor {
    execute(client: ExtendsClient): void {
        console.log(`Bot lancé : ${client.user.username}`)
    }
}
