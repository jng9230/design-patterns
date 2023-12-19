class Burger {
    ingredients: string[]

    constructor(ingredients: string[]) {
        this.ingredients = ingredients;
    }

    print() {
        console.log(this.ingredients);
    }
}

class BurgerFactory {
    createCheeseBurger() {
        const ingredients = [
            "bun",
            "cheese",
            "beef-patty"
        ]
        return new Burger(ingredients);
    }

    createDeluxeCheeseBurger() {
        const ingredients = [
            "bun",
            "tomato",
            "lettuce",
            "cheese",
            "beef-patty"
        ]
        return new Burger(ingredients);
    }

    createVeganBurger() {
        const ingredients = [
            "bun",
            "special-sauce",
            "veggie-patty"
        ]
        return new Burger(ingredients);
    }
}

const vegan_burger = new BurgerFactory().createVeganBurger();
vegan_burger.print();