
import _ from "lodash";
// comparison of two objectect using JSON.stringify
const obj1 = {a: 1, c: 5, b: 2};
const obj2 = {a: 1, b: 2, c: 5};

const stringify1 = JSON.stringify(obj1);
const stringify2 = JSON.stringify(obj2);

if(stringify1 === stringify2) {
    console.log('They are same');
}else{
    console.log('They are different');
}




const object1 = {a: 1, c: 5, b: 2};
const object2 = {a: 1, b: 2, c: 5};

console.log(_.isEqual(object1, object2));

