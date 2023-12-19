class USBCable {
    isPlugged = false;

    plugUSB() {
        this.isPlugged = true;
    }
}

class USBPort {
    portAvailable = true;

    plug(usb: USBCable) {
        if (this.portAvailable) {
            usb.plugUSB();
            this.portAvailable = false;
        }
    }
}

const usb = new USBCable();
const usbPort1 = new USBPort();
usbPort1.plug(usb)

/** above works fine, but breaks if we have a different type of cable
*/
class MicroUSBCable {
    isPlugged = false;

    plugMicroUSB() {
        this.isPlugged = true;
    }
}

class MicroToUSBAdapter extends USBCable {
    microUSBCable: MicroUSBCable;

    constructor(microUSB: MicroUSBCable) {
        super();
        this.microUSBCable = microUSB;
        this.microUSBCable.plugMicroUSB();
    }

    // can override plug() if needed
}

const microToUSBAdapter = new MicroToUSBAdapter(new MicroUSBCable());
const usbPort2 = new USBPort();
usbPort2.plug(microToUSBAdapter); // microUSB -> usb port!

/**
 *  class A: original class
 *  class B: class that interacts with class A
 *  class C: similar to A, but can't interact with B
 *  --> adapter. make a new class D that extends A and is 
 *  a copy of C. delete C. 
 *  - make sure that the method that B uses to interact with A is 
 *  written correctly/overriden/brought down from A
 */