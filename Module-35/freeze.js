const bottle = {color: 'yellow', price: 20, capacity: 1, brand: 'Aarong'};
const objectKeys = Object.keys(bottle);    // to show just object property name
console.log(objectKeys);
const objectValues = Object.values(bottle);   // to show just object property values
console.log(objectValues);
const objectValuesWithKeys = Object.entries(bottle);   // to show object properties with values
console.log(objectValuesWithKeys);

Object.seal(bottle);
// Object.freeze(bottle);
bottle.color = 'red';
console.log(bottle);
delete bottle.price;
console.log(bottle);
bottle.height = 'hello';
console.log(bottle);