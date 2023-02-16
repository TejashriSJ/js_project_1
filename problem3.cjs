function problem3(inventory){
    if (! inventory || inventory.length === 0 || !(Array.isArray(inventory)) ){
        return [];
    }
    else{
        let carModels =[];
        for(let index=0; index<inventory.length ; index++){
            carModels[index] = inventory[index].car_model;
        }
        return  carModels.sort(function(a,b){
            return a.toLowerCase() - b.toLowerCase();
        });
    }

}
module.exports = problem3;