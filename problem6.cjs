let BMWAndAudi=[];
let BMWAndAudiIndex=0;

function problem6(inventory){
    for (let index=0; index<inventory.length; index++){
        if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi'){
            BMWAndAudi[BMWAndAudiIndex] = inventory[index];
            BMWAndAudiIndex++;
        }
    }
    return BMWAndAudi;
}
module.exports = problem6;