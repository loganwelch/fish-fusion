//import mongerInventory function from fishMonger.js
const { mongerInventory } = require("./fishMonger.js")

//console.log menu header in its own console log
console.log("<h1>Menu</h1>")

//define a function fishMenu that returns the HTML string of the menu
    const fishMenu = (dailyPriceLimit) => { 
        //invoke mongerInventory with dailyPriceLimit as an argument
        let chefArray = mongerInventory(dailyPriceLimit)
        //create empty string called message to add each menu item to it
        let message = ""
        //use a for loop to iterate through species property of the chefsInventory array
        for(fish of chefArray) {
            //use template string with html text and species property to display menu
            message += `<article class="menu">
    <h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>
</article> \n`
        
        }
        return message
    }





module.exports = { fishMenu }







//create function that looks into boatInventory <---LOL @ us

//other options:
    //invoke chefsOrder function outside of fishMenu function and call the modified array chefsInventory
        //pass mongerInventory and chefBudget as arguments
        //return chefsInventory