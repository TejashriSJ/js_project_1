function problem1(inventory , searchId){


if (! inventory || inventory.length === 0 || ! searchId || !(Array.isArray(inventory)) || !(Number.isInteger(searchId)) ){
    return []
}
else{
    for(let carIndex =0; carIndex< inventory.length ; carIndex++){
     
        if (searchId === inventory[carIndex].id){
            console.log( 'Car ' + searchId + ' is a '+ inventory[carIndex]["car_year"] + ' ' +  inventory[carIndex]["car_make"] + ' ' + inventory[carIndex]["car_model"] );
            return inventory[carIndex]
            
        }
    
    }
}

}
module.exports = problem1; 