/*Question No 1: Lookup the term algorithm.
Answer
An algorithms is a well-defined set of instruction or rules designed a problems or perform a specific task.
It takes an input processes it through a series of computational steps and procedure an output.

Lookup the term "use case" in terms of software or requirements

deepcopy function that takes in object as a prarmeter. 
That parameter can be of any type
The object can only have properties not functions.
Get each property in the function and copy that property in the new object.
Once all the properties and objects are copied then return the object.
Deepcopy function needs to be able to copy object with there an object.
Deepcopy function should be able to clone any type of object with any number of properties or objects.*/

let person = {
    firstName : "Faraz",
    lastName : "Hassan",
    age : 39,
    isMarried : true,
    Address :{
      country :"Pakistan"
    }
    
  };
function deepClone (obj){

  console.log(obj);
}

deepClone(person);

 let personCopy = deepClone(person);
// console.log(deepClone(person));



  let motorCycle = {
    make : "Honda",
    model : "CD",
    year : 2023,
    isElectric : false,
    Engine :{
      size :"750CC"
    }
    
  };
  //all functions are generic depending on the requirements defined
  let deepcopy = function(Obj){
    //obj can be anything
    //it can be a person, it can be a car, or motorcycle
   
    console.log(Obj);
  }
  deepcopy(motorCycle);
  
   let motorCycleCopy = deepcopy(motorCycle);
   //console.log(deepcopy(motorCycle));

//if we had a car object then we could pass it in
//deepcopy(car);
    
    

    






