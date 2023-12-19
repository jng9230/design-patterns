// AKA pub-sub

class YoutubeChannel {

    name: string;
    subscribers: YoutubeUser[];

    constructor(name: string) {
        this.name = name;
        this.subscribers = []
    }

    subscribe(sub: YoutubeUser) {
        this.subscribers.push(sub)
    }

    notify(event: any) {
        this.subscribers.forEach((d) => {
            d.sendNotification(this, event);
        })
    }
}

// subscriber class, implementing a subscriber interface
interface YoutubeSubscriber {
    sendNotification(channel: YoutubeChannel, event: any): void; //just print for now
}

// below was for testing multiple inheritance
/** multiple inheritance is supported for both abstract classes and interfaces
 *  in TS, although others like Java only support multi-inheritance for inters.
 * 
 *  -> use interfaces for multi-inheritance. 
 *  Either way, we have to write custom type guards (isSomeClass()) to
 *  check if a class implements/extends some other thing.
 * 
 *  note: can't use `instanceof` on interfaces
 */
interface PremiumUser {
    skipAds(): boolean;
}

class YoutubeUser implements YoutubeSubscriber, PremiumUser {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    sendNotification(channel: YoutubeChannel, event: any): void {
        console.log(`User ${this.name} received a notifcation from ${channel.name}: ${event}`)
    }

    skipAds(): boolean {
        return false
    }
}

const user1 = new YoutubeUser("sub4")

// CUSTOM TYPE GUARD!!!
function instanceOfSub(object: any): object is YoutubeSubscriber {
    return (object as YoutubeSubscriber).sendNotification !== undefined;
}

// console.log(user1 instanceof PremiumUser) //errs b/c it's an interface
// console.log(user1 instanceof YoutubeSubscriber) //"" 
console.log(instanceOfSub(user1)) //true
console.log(user1 instanceof YoutubeUser) //true


const channel = new YoutubeChannel("asdasd");

channel.subscribe(new YoutubeUser("sub1"))
channel.subscribe(new YoutubeUser("sub2"))
channel.subscribe(new YoutubeUser("sub3"))

channel.notify("new video go watch now!!!")

////////////////////////////////////////////////////////

// abstract class A {
//     member: string;
// }

// function instanceOfA(object: any): object is A {
//     return "member" in object
// }

// const a: any = { member: "foobar" }

// if (instanceOfA(a)) {
//     console.log(a.member)
// }