function getCarHONDA(CarInventory) {
    const HondaCar=CarInventory.find(car=>car.car_make.toLowerCase()==="honda")
    if (HondaCar) {
        return `this a ${HondaCar.car_make} ${HondaCar.car_model}from ${HondaCar.car_year} `
        
    } else {
        return`no honda car found`
        
    }
}
const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
  console.log(getCarHONDA(inventory));
  