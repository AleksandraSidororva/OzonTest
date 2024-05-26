const cars = [
    {
        brand: "BMW", 
        color: "red", 
        horse_power: 245, 
        weith_kg: 1600
        
    },
    {
        brand: "Mercedes", 
        color: "white", 
        horse_power: 190, 
        weith_kg: 1300
        
    },
    ];

const auto = cars.filter (function(cars) 
{
return cars.color === "red";
});

console.log(auto);