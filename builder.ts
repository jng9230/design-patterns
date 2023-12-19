class Burger {
    bun = "Potato";
    patty = "Beef";
    cheese = "American";

    constructor() {
    }

    setBun(bun: string) {
        this.bun = bun;
    }

    setPatty(patty: string) {
        this.patty = patty;
    }

    setCheese(cheese: string) {
        this.cheese = cheese
    }

    print() {
        console.log(`Burger with ${this.bun} buns, ${this.cheese} and ${this.patty} patty`)
    }
}

class BurgerBuilder {
    private burger: Burger;

    constructor() {
        this.burger = new Burger();
    }

    addBun(bun: string) {
        this.burger.setBun(bun)
        return this
    }

    addPatty(patty: string) {
        this.burger.setPatty(patty)
        return this
    }

    addCheese(cheese: string) {
        this.burger.setCheese(cheese)
        return this
    }

    build() {
        return this.burger
    }

    print() {
        this.burger.print();
    }
}

const burger = new BurgerBuilder()
burger.print()

burger.addBun("poppy")
    .addCheese("american")
    .addPatty("beef");

burger.print()

// console.log(burger.burger);