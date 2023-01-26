// create object using object literal
const player = {};   // empty object
player.name = 'Emon',
player.age = 23,
player.specialty = 'Batsman',
player.bat = function(){
    console.log('Swing');
}
// console.log(player);
// player.bat();


// another example of create object using object literal
const student = {
    name: 'Emon',
    zilla: 'Lalmonirhat',
    hobby: function() {
        console.log('Doing nothing.');
    },
    age: 23
}

// console.log(student);
// student.hobby();


// object constructor 
const member = new Object();    // notun ekta fata object create hoye jabe
// console.log(member);


// Object create method
const item = Object.create(student);
console.log(item.zilla);  // item jokhon dekhbe je tar kache zilla property nai, tokhon she tar parent student er kache jabe
console.log(item.district);  // district property ta item er moddheo nai, parent student er moddheo nai, tai undefined dakhabe


// create object by using class
class Person {
    name= 'Emon';
    district= 'lalmonirhat';
    constructor(age) {
        this.personAge = age;
    }
}
const person1 = new Person(23);
console.log(person1);


// create object using function
function car(model, price) {
    this.carModel = model;
    this.carPrice = price;
}

const tesla = new car('elon', 20);
console.log(tesla);

