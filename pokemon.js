// Your code here!

//Creating Pokemon class//

function Pokemon_creator(name, attack, defense, HP, type,  ); {


    this.name = name, //this creates name class
    this.attack = attack, //this creates attack class
    this.defense = defense, //this creates defense class
    this.HP =  HP, // this creates HP class
    this.type = type //this creates type class
}

//variable example Pokemon(Pickachu)
var Pickachu = {
    "name": "Pickachu",
    "attack":100,
    "Defense" : 1.5,
    "HP" : 101,
    "Type" : "Electric"
}
//TASK 2//
//Creates take dmg function//
console.log(Pickachu.HP);

function takeDamage (takeDamage){
    Pickachu.takeDamage(20);
    console.log(pickachu.HP);
}
//execute  task 2 code
console.log(Pickachu.HP);
Pickachu.takeDamage(20);
    console.log(Pickachu.HP);

//TASK 3//
function attackOpponent (name){
    const squrtle = new Pokemon_creator("Squrtle", 25,1.5, 15,"Electric");
    Pickachu.attackOpponent(squrtle);
    console.log(squrtle.HP);
//Execute task 3//
console.log(squrtle.attackOpponent);
    Pickachu.attackOpponent(20);
    console.log(squrtle.HP);

}

console.log(Pickachu.health);

//Task 4//
function display(name, attack, defense, hp, type){
   const Charizard = new Pokemon_creator("Charizard", 33.3, 10,"Poison");
   
   var Charizard = {
    "name": "Charizard",
    "attack":50,
    "Defense" : 60,
    "HP" : 101,
    "Type" : "Steel"
   }
   console.log(Charizard.display)
}

// Don't edit this line!
module.exports = Pokemon