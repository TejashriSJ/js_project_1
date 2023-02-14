let olderCars=[]
let olderCarIndex=0

function problem5(inventory,years){
    for (let index=0; index<years.length ; index++){
        if (years[index]<2000){
            olderCars[olderCarIndex] = inventory[index].car_model
            olderCarIndex+=1
        }
    }
return("Old cars : \n " + olderCars+ "\n\n Total: " + olderCars.length +" cars")
    
}
module.exports = problem5
