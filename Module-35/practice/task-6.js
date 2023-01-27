// delete object property by using destructuring

const laptop = {
    brand: 'HP',
    model: 'Notebook',
    year: 2020
}

const {model, ...afterDeleteModel} = laptop;
console.log(afterDeleteModel);