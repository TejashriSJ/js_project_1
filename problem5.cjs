let problem4 = require('./problem4.cjs');



function problem5(inventory){

    let olderCars=[]
    if (! inventory || inventory.length === 0 || !(Array.isArray(inventory))){
        return [];
    }
    else{
        let years = problem4(inventory);
        for (let index=0; index<years.length ; index++){
            if (years[index]<2000){
                olderCars.push(inventory[index].car_model) 
                
            }
        }
        
        console.log(olderCars.length )
        return olderCars
    }
 

    
}
module.exports = problem5
