// object er vitore function er moto ja thake ta holo method
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

const examInfo = student.exam();
console.log(examInfo);
const improvementInfo = student.improvement('Algebra');
console.log(improvementInfo);
const treatMoney = student.treatDey(1000, 100);
console.log(treatMoney);