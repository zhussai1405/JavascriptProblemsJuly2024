
let testVariable;
console.log(testVariable);  //undefined

testVariable = true;

console.log(typeof testVariable);   //boolean
console.log(testVariable);          //true

let copyVariable = testVariable;

console.log(copyVariable);          //true

testVariable = "someOtherValue";

console.log(testVariable);          //"someOtherValue"
console.log(copyVariable);          //true

let someOtherValues;
someOtherValues = 246;
console.log(typeof someOtherValues);
console.log(someOtherValues);

let someOtherValues1;
someOtherValues1 = "246";
console.log(typeof someOtherValues1);
console.log(someOtherValues1);

let someOtherValues2 = 2468;
let someOtherValues3 = "2468";
someOtherValues2 = someOtherValues3;
console.log(someOtherValues2);





const person = {
    height: "86",
    weight: 124,
    male: true
}

const car = {
    engineSize: "4 cylinders",
    horsepower: 450,
    isElectric: false,
    Engine: {
        type: "gasoline"
    }
}

let deepCopy  = function (anyObject){

    console.log("Executing deep copy function");
    for(key in anyObject){
        console.log(key);

    }

}

deepCopy(car);



let carCopy  = car;

console.log(car.horsepower);

console.log(carCopy.horsepower);

let carPart = "cylinder";

let copyCarPart = carPart;

carPart = "cylinderHead";

console.log(carPart);

console.log(copyCarPart);``
