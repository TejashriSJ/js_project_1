function problem1(inventory){

for(let carIndex =0; carIndex< inventory.length ; carIndex++){
     
    if (33 === inventory[carIndex].id){
        return 'Car 33 is a '+ inventory[carIndex].car_year + ' ' +inventory[carIndex].car_make +' '+ inventory[carIndex].car_model;
    }

}

}

module.exports = problem1; 