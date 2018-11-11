var house = {
areas: [{
livingRoom: {items: ['tv','sofa']},bedroomOne: {items: ['bed','washing machine'],
windows: 3}, bedroomTwo:{items: ['bed','bed','desk'],windows: 4},kitchen:{items: ['fridge','broken chair']
}}],
garden: [true, 'Red Rose'],
garage: {
car: {
color: 'red',
wheels: 4,
honk: ()=>{alert("Beep")}
}
}
}

// Find total number of areas in the house
let totalAreas = 0;
totalAreas = Object.keys(house.areas[0]).length;
console.log("total number of areas in the house: " + totalAreas);

// Add a dining table to the living room
console.log("kitchen items: " + house.areas[0].livingRoom.items);
house.areas[0].livingRoom.items.push("dining table");
console.log("Add a dining table to the living room: " + house.areas[0].livingRoom.items);

// Add a stove to the kitchen
console.log("kitchen items: " + house.areas[0].kitchen.items);
house.areas[0].kitchen.items.push("stove");
console.log("Add a stove to the kitchen: " + house.areas[0].kitchen.items);

// Remove the washing machine from bedroomOne
console.log("bedroomOne items: " + house.areas[0].bedroomOne.items);
house.areas[0].bedroomOne.items.pop("washing machine");
console.log("Remove the washing machine from bedroomOne: " + house.areas[0].bedroomOne.items);


// Find the total number of beds in all rooms
function searchBed(name, totalAreas){
    let count=0;
    for (var i=0; i < totalAreas; i++) {

       let area= Object.keys(house.areas[0])[i];
       let areaItemLength = house.areas[0][area].items.length;
     
       for(let k=0 ; k <areaItemLength ; k++){
        if (house.areas[0][area].items[k] === name) {
            count++;
        }
    }
    }

    return count;
}

var totalRooms = searchBed("bed", totalAreas);
console.log("the total number of beds in all rooms: "+ totalRooms);

// Change the color of the car to blue
console.log("car color: " + house.garage.car.color);
house.garage.car.color="blue"
console.log("Change the color of the car to blue: " + house.garage.car.color);

// Add a another car to the garage with a honk function
console.log("Garage Cars: "+ JSON.stringify(house.garage))
house.garage.car2 = {
    color: 'Black',
    wheels: 4,
    honk: ()=>{alert("Beep from New car!")}
    };
console.log("Add a another car to the garage with a honk function "+ JSON.stringify(house.garage.car2));


// Make the new car honk
house.garage.car2.honk();


// Change the 'broken chair' in the kitchen to 'new chair'
console.log("Kitchen chair: " + house.areas[0].kitchen.items);
house.areas[0].kitchen.items[1]="new chair";
console.log("Change the 'broken chair' in the kitchen to 'new chair': " + house.areas[0].kitchen.items);


// If the house has a garden, console.log the name of the flower
if(house.garden[0] == true)
console.log("house has a garden. Name of the flower: "+ house.garden[1]);
else
console.log("house doesn't have a garden");
