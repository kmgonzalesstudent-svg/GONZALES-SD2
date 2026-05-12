console.log("Welcome to Session 21!");

//[Section] javaScript Objects
//immitates real-world objects and description

let arr = [1, 2, 3, 4, 5];
let obj = {
    name: "Gonzales",
    age: 21, };

console.log(arr);
console.log(obj);

let person = {
    completeName: "popoy barzaga",
    age: 21,
    Height: 183,
    weight: 80,
    contact: [1234, 5678],
    address: {
        house: 1,
        barangay: "San Isidro",
        city: "Cebu City"
    }
};
console.log(person.contact[1]);
console.log(person.address.barangay);
console.log(person);
// Dot notation
// Access value inside an object property

console.log(person.completeName);
console.log(`Hi, my name is ${person.completeName} and I am ${person.age} years old.`);

console.log(person['completeName']);

//updating a value via dot notation
person.completeName = "Michael Barzaga";
console.log(person);

person.email = "Pipoy@mail.com";
console.log(person);

//Class and Objects
class Car {
    constructor(Brand, fuel, Displacement, SeatCapacity) {
        this.brand = Brand;
        this.fuel = fuel;
        this.displacement = Displacement;
        this.seatCapacity = SeatCapacity;
        this.makeSound = function() {
            if(this.fuel.toLowerCase() === "gasoline"){
                console.log("Vroom Vroom!");
            } else if(this.fuel.toLowerCase() === "electric"){
                console.log("Whirr Whirr!");
            } else if(this.fuel.toLowerCase() === "diesel"){
                console.log("Bruummm Bruummm!");
            } else {
                console.log("Unknown fuel type.");
            }
        };
    }
}

console.log(Car);

// Instance -> copy/duplicate of a function class

let car = new Car("Toyota", "Gasoline", 1500, 5);
console.log(car);
console.log(car.brand);
car.makeSound();

let car2 = new Car("Honda", "electric", 1500, 5);

console.log(car2);
console.log(car2.brand);
car2.makeSound();

let Truck = new Car("Mitsubishi", "Diesel", 3000, 2);
console.log(Truck);
console.log(Truck.brand);
Truck.makeSound();

// [Section] Pokemon 

function Pokemon(name, level, health, mana) {
    this.name = name;
    this.level = level;
    this.maxHealth = health * level;
    this.health = this.maxHealth;
    this.mana = mana;
    this.maxMana = this.mana;
    this.healthPotions = 2;
    this.manaPotions = 2;

    this.tackle = function(target) {
        let damage = 25;
        console.log(`${this.name} used Tackle on ${target.name}!`);
        target.health = Math.max(0, target.health - damage);
    }
    this.useskill1 = function(target) {
        if(this.name === "Pikachu"){
            if(this.mana < 75){
                console.log(`${this.name} does not have enough mana to use Thunderbolt! mana left: ${this.mana}`);
                return;
            }
            let damage = 250;
            console.log(`${this.name} used Thunderbolt on ${target.name}!`);
            target.health = Math.max(0, target.health - damage);
            this.mana -= 75;
            console.log(`${this.name} has ${this.mana} mana left. ${target.name} health left: ${target.health}`);
        } else if(this.name === "Charmander"){
            if(this.mana < 100){
                console.log(`${this.name} does not have enough mana to use Flame Thrower! mana left: ${this.mana}`);
                return;
            }
            let damage = 350;
            console.log(`${this.name} used Flame Thrower on ${target.name}!`);
            target.health = Math.max(0, target.health - damage);
            this.mana -= 100;
            console.log(`${this.name} has ${this.mana} mana left. ${target.name} health left: ${target.health}`);
        }
    };

    this.useHealthPotion = function() {
        if(this.healthPotions <= 0){
            console.log(`${this.name} has no Health Potions left.`);
            return;
        }
        if(this.health >= this.maxHealth){
            console.log(`${this.name} is already at full health.`);
            return;
        }

        let healAmount = 150;
        let previousHealth = this.health;
        this.health = Math.min(this.health + healAmount, this.maxHealth);
        this.healthPotions -= 1;
        console.log(`${this.name} used a Health Potion! Health: ${previousHealth} -> ${this.health}. Health Potions left: ${this.healthPotions}`);
    };

    this.useManaPotion = function() {
        if(this.manaPotions <= 0){
            console.log(`${this.name} has no Mana Potions left.`);
            return;
        }
        if(this.mana >= this.maxMana){
            console.log(`${this.name} is already at full mana.`);
            return;
        }

        let manaRecover = 75;
        let previousMana = this.mana;
        this.mana = Math.min(this.mana + manaRecover, this.maxMana);
        this.manaPotions -= 1;
        console.log(`${this.name} used a Mana Potion! Mana: ${previousMana} -> ${this.mana}. Mana Potions left: ${this.manaPotions}`);
    };
}

let pikachu = new Pokemon("Pikachu", 5, 100, 175);

console.log(pikachu);

let charmander = new Pokemon("Charmander", 8, 120, 150);
console.log(charmander);

pikachu.tackle(charmander);
pikachu.tackle(charmander);
console.log(charmander);

charmander.tackle(pikachu);
console.log(pikachu);
console.log(charmander);

charmander.useskill1(pikachu);
charmander.useManaPotion();
pikachu.useskill1(charmander);
charmander.useHealthPotion();
console.log(pikachu);
console.log(charmander);