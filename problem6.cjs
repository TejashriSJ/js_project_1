
function problem6(inventory){

    let BMWAndAudi=[];

    if (! inventory || inventory.length === 0 || !(Array.isArray(inventory)) ){
        return [];
    }
    else{
        for (let index=0; index<inventory.length; index++){
            if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi'){
                BMWAndAudi.push(inventory[index]); 
            }
        }
        return BMWAndAudi;
    }
}
module.exports = problem6;