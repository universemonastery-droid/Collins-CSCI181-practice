//Ryan Collins Web Design and Programming week 11 assignment.
const driver_name = "Ryan";
const distance_miles = 350;
const mpg = 25;
const gas_price = 3.85;
const fuel_capacity = 12; //In gallons
const is_round_trip = true;

let total_distance; //Unassigned for now

//if/else statement for total distance
if (is_round_trip) {
  total_distance = distance_miles * 2;
} else {
  total_distance = distance_miles;
}
console.log("My total distance: " + total_distance + " miles");

function GallonsNeeded(distance, miles_per_gallon) {
  return distance / miles_per_gallon;
}

function FuelCost(gallons, price_per_gallon) {
  return gallons * price_per_gallon;
}

//Now using the functions for inital calculations V
const total_gallons_needed = GallonsNeeded(total_distance, mpg);
const total_cost = FuelCost(total_gallons_needed, gas_price);

//Preparing for the loop V

const miles_per_tank = fuel_capacity * mpg;
const cost_per_tank = FuelCost(fuel_capacity, gas_price);

let miles_traveled = 0;
let stop_count = 0;
let running_cost_total = 0;

//Loop to tell me when to get gas V

while (miles_traveled + miles_per_tank < total_distance) {
  stop_count++;
  miles_traveled += miles_per_tank;
  running_cost_total += cost_per_tank;

  //Here im using the "template literal" for log line, (like python f strings!)
  console.log(
    `Stop #${stop_count}: Traveled ${miles_traveled} miles so far. Estimated gas spent:$${running_cost_total.toFixed(2)}`,
  );
}

//Final trip summary
console.log(`Driver: ${driver_name}`);
console.log("Total Distance: " + total_distance + " miles");
console.log(
  `Estimated gallons needed for trip: ${total_gallons_needed.toFixed(2)}`,
);
console.log(`Estimated gas cost of trip: $${total_cost.toFixed(2)}`);
