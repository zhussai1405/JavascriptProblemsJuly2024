
let testVariable;
console.log(testVariable);

testVariable = true;

console.log(typeof testVariable);
console.log(testVariable);

let copyVariable = testVariable;

console.log(copyVariable);

testVariable = "someOtherValue";

console.log(testVariable);
console.log(copyVariable);




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

