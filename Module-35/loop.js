const member = {name: 'Emon', age: 23, study: 'CSE', isGoodPerson: true};

// const keys = Object.keys(member);
// console.log(keys);
// for(const key of keys) {
//     console.log(key);
// }
// const objectEntries = Object.entries(member);
// console.log(objectEntries);


for(const key in member) {
    console.log(key, member[key]);   // (property_name, property_value)
}

