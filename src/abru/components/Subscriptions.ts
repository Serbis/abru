import ActorRef from "../../seal/actors/ActorRef";

/** Subscriptions of a component for his events. This object allows add, delete and extract actor
 * references subscribed on various component level events.*/
export default class Subscriptions {

    private eventsGrid: Array<SubscriptionEntry> = [];


    /** Subscribes actor to the event. If subscription exists, do nothing
     *
     * @param {string} event component level event
     * @param {ActorRef} ref subscriber
     */
    subscribe(event: string, ref: ActorRef) {
        let entry = this.eventsGrid.find((v) => v.event == event);
        if (entry) {
            if (!entry.subscribers.find((v) => v.equals(ref))) {
                entry.subscribers.push(ref);
            }
        } else {
            this.eventsGrid.push(new SubscriptionEntry(event, [ref]))
        }
    }

    /** Returns subscribers list for some event
     *
     * @param {string} event
     * @return {Array<ActorRef>}
     */
    getSubscribers(event: string): Array<ActorRef> {
        let entry = this.eventsGrid.find((v) => v.event == event);
        if (entry) {
            return entry.subscribers;
        }

        return [];
    }
}

//--------------- INTERNAL API ---------------

class SubscriptionEntry {
    event: string;
    subscribers: Array<ActorRef> = [];

    constructor(events: string, subscribers: Array<ActorRef>) {
        this.event = events;
        this.subscribers = subscribers;
    }
}