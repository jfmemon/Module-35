// borrow method from another object and use it for another object
const student = {
    name: 'emon',
    money: 5000,
    study: 'cse',
    exam:function() {
        return this.name + ' is participating an exam.';
    },
    improvement: function(subject) {
        return `${this.name} is going to give improvement on ${subject}`;
    },
    treatDey: function(amount, tips) {
        this.money = this.money - amount - tips;
        return `Remaining money is ${this.money} and tips is ${tips}.`;
    }
}

const people = {
    name: 'Jack',
    money: 8000
}

// using call method
const result = student.exam.call(people);
console.log(result);

const moneyResult = student.treatDey.call(people, 1000, 100);
console.log(moneyResult);

// using apply method
const moneyResult1 = student.treatDey.apply(people, [1000, 50]);
console.log(moneyResult1);

// using bind method
const moneyBind = student.treatDey.bind(people);
const bindMoney = moneyBind(1000, 20);
console.log(bindMoney);