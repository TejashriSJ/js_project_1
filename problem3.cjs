function problem3(inventory){
    let carModels =[];
    for(let index=0; index<inventory.length ; index++){
        carModels[index] = inventory[index].car_model;
    }
    return  carModels.sort(function(a,b){
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

}
module.exports = problem3;