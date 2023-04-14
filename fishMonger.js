// import boatInventory function
const { boatInventory } = require("./fishingBoat.js")

//create a function called mongerInventory with a for of loop that iterates through todaysCatch
const mongerInventory = (chefPrice) =>{
    //invoke boatInventory, which generates todaysCatch array
    let todaysCatch = boatInventory()
    //declare empty array called fishMongerArray []
    let fishMongerArray = []
    for (fish of todaysCatch) {
        //create ifand statement that checks if fish price is <= 7.50  && fish quantity >= 10
        if(fish.price <= 7.50 && fish.amount >= 10) {
            //then .push array method to add objects that meet the above requirements to the empty fishMongerArray array in increments of 10
            fishMongerArray.push(fish)
        }
    }
    //declare a new array called chefArray
    let chefArray = []
    for (fish of fishMongerArray) {
        //modify the amount property of each object in fishMonger to = 10
        fish.amount = 10
        //have another if conditional to check that price property is <= dailyPriceLimit
        if (fish.price <= chefPrice) {
            //then divide the amount property of each object by 2. (fishMongerArray.amount = math.floor(fishMongerArray.amount / 2 ) )
            fish.amount /= 2
            //push the fish object into new array
            chefArray.push(fish)
        }
    }
    //return chefArray array
    return chefArray
}
    //export mongerInventory function to restaurant.js
    module.exports = { mongerInventory }










 //****Potential two function code */   
//create a function called chefsOrder with a for of loop that iterates through fishMongerArray array
    //parameters are dailyPriceLimit (a number) and the function above (which returns fishMongerArray)
    //invoke
    //declare empty array called chefsInventory []
    //create if statement that checks if fish price is <= dailyPriceLimit
    //then divide the amount property of each object by 2. (fishMongerArray.amount = math.floor(fishMongerArray.amount / 2 ) )
    //for above we should change format to multpiply by a variable representing the percent the chef will buy
    //use .push array method to add objects that meet the above requirements to the empty chefsInventory array
    //return chefsInventory array
//
    //arbitrary chanGe for git practice
    //export mongerInventory and chefsOrder functions to restaurant.js