// console.log(this);
const student = {
    name: 'Emon',
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