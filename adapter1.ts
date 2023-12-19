// rewriting adapter to be more akin to strategy:
/** idea: strategy is used when you're doing a very similar function
 *  but with slightly different params 
 *      - e.g.: passport JS: same auth, diff secrets
 *      - filter: same iterator and T/F taking, diff way to get to T/F
 *      - here: USBs: same plugging action, diff cable
 */

abstract class Cable {
    abstract isPlugged: boolean;
    abstract plug(): void;
}

class USBCable1 extends Cable {
    isPlugged = false;

    plug() {
        this.isPlugged = true;
    }
}

class MicroUSBCable1 extends Cable {
    isPlugged = false;

    plug() {
        this.isPlugged = true;
    }
}

class USBPort1 {
    portAvailable = true;

    plug(usb: Cable) {
        if (this.portAvailable) {
            usb.plug();
            this.portAvailable = false;
        }
    }
}

const port1 = new USBPort1().plug(new USBCable1())
const port2 = new USBPort1().plug(new MicroUSBCable1())