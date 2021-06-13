//classes

class Desert {
     constructor(calories=100){
        // console.log("this desert has ",calories,"calories")
        this.calories = calories
        this.ingredients = [];
    }

    addIngregients(ingredient){
        this.ingredients.push(ingredient);
    }

    getIngredients(){
        console.log(this.ingredients)
    }


}

// const vanilla = new Desert(275);
// console.log(vanilla.calories)

// const strawberry = new Desert(150);
// console.log(strawberry.calories)

// vanilla.addIngregients("milk");
// vanilla.addIngregients("sugar");

// vanilla.getIngredients();

class IceCream extends Desert{
    constructor(flavour,calories,toppings=[],ingredients=[]){
        super(calories,ingredients)
        this.flavour = flavour
        this.toppings = toppings
    }
    getIcecream(){
        console.log(`${this.flavour},${thiscalories}`)
    }
}
const vanilaaBooster = new IceCream("vanilla",456,["chocochips",jelly],["milk","sugar"])
vanilaaBooster.getIcecream




