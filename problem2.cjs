
function problem2(inventory){ 
    
    if (! inventory || inventory.length === 0 || !(Array.isArray(inventory)) ){
        return [];
    }
    else{
        return 'Last car is a ' + inventory[inventory.length-1].car_make +' ' + inventory[inventory.length-1].car_model;
    }

    
}

module.exports = problem2;