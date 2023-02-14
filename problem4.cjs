function problem4(inventory){

    let years=[];

    for(let index =0; index< inventory.length ; index++){

            years[index]= inventory[index].car_year;
        }
    
    return years;
    }
    
    module.exports = problem4;