import { _Event } from "../../Annotations/_Events";
import ExtendsClient from "../../Class/ExtendsClient";
import EventExecutor from "../../Interfaces/EventExecutor";

@_Event({event: "ready"})
export default class Ready implements EventExecutor {
    execute(client: ExtendsClient): void {
        console.log(`Bot lancé : ${client.user.username}`)
    }
}