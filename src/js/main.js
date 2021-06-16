console.info('======================');

console.info('Filter');
let array = [1, 5, 6, 7, 9, 4, 8];

function double(number) {
    return number % 2 == 0;
}

console.info(array.filter(double));
console.info('----------------------');

function less(number) {
    return number < this;
}

function sortLess(x, list) {
    return list.filter(less, x);
}

let array2 = [1, 5, 6, 7, 9, 4, 8];

console.info(sortLess(3, array2));

console.info('----------------------');

let people = [
    {name: "TK", age: 26},
    {name: "Kao", age: 10},
    {name: "Kaho", age: 25},
    {name: "Kap", age: 22},
    {name: "Popo", age: 37},
    {name: "Kazumi", age: 30}
];

function less21(person) {
    return person.age > 21;
}

function overAge(people) {
    return people.filter(less21);
}

console.info(overAge(people));

console.info('======================');
console.info('reduce');


let shoppingCart = [
    {productTitle: "item 1", amount: 70},
    {productTitle: "item 2", amount: 30},
    {productTitle: "item 3", amount: 20},
    {productTitle: "item 4", amount: 60}
];
const getAmount = function (order) {
    return order.amount;
};
const sumAmount = function (acc, amount) {
    return acc + amount;
}

function getTotalAmount(shoppingCart) {
    return shoppingCart.map(getAmount).reduce(sumAmount, 0);
}

console.info('items sum = ' + getTotalAmount(shoppingCart));
console.info('----------------------');

let shoppingCart2 = [
    {productTitle: "Functional Programming", type: "cup", amount: 10},
    {productTitle: "Kindle", type: "eletronics", amount: 30},
    {productTitle: "Shoes", type: "cup", amount: 20},
    {productTitle: "Clean Code", type: "books", amount: 60}
]

const byCup = function (type) {
    return type.type == 'cup';
}


const getAmoun = function (type) {
    return type.amount;
}

const sumAmoun = function (amount, acc) {
    return amount + acc;
}


function getTotalAmoun(shoppingCart) {
    return shoppingCart.filter(byCup).map(getAmoun).reduce(sumAmoun, 0);
}


console.info(getTotalAmoun(shoppingCart2));
console.info('======================');
var users4 = [
    {id: 11, name: 'Adam', age: 23, group: 'editor'},
    {id: 47, name: 'John', age: 28, group: 'admin'},
    {id: 85, name: 'William', age: 34, group: 'editor'},
    {id: 97, name: 'Oliver', age: 28, group: 'admin'}
];
const even = (element) => element.name === 'Adam';
let searchName = users4.some(even);
console.info(searchName)
console.info('======================');
var arr = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueArr = [...new Set(arr)];

console.log("Удаление дубликатов из массива числе/строк: " + uniqueArr);

var users = [
    {id: 11, name: 'Adam', age: 23, group: 'editor'},
    {id: 47, name: 'John', age: 28, group: 'admin'},
    {id: 85, name: 'William', age: 34, group: 'editor'},
    {id: 97, name: 'Oliver', age: 28, group: 'admin'}
];
let res = users.filter(it => it.name.includes('oli'));
console.info("Поиск по массиву");

console.info('Перебрать в одномерный массив');

let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);

console.info('=====Замена в объекте=========');
let users5 = [
    {id: 11, name: 'Adam', age: 23, group: 'editor'},
    {id: 47, name: 'John', age: 28, group: 'admin'},
    {id: 85, name: 'William', age: 34, group: 'editor'},
    {id: 97, name: 'Oliver', age: 28, group: 'admin'}
];
let updatedUsers = users5.map(
    p => p.id !== 47 ? p : {...p, age: p.age + 1}
);
console.log(updatedUsers);

console.info('========Merge array=======');
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
let arrRes = arrA.concat(arrB);

console.log(arrRes);
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('сработало');
        resolve(data = 'test');
    }, 1000)
})
let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('сработало2');
        resolve(data = 'test2');
    }, 1000)
})
promise.then(resolve => {
        setTimeout(function () {
            console.log(data)
        }, 1000)
        promise2.then(resolve => {
                setTimeout(function () {
                    console.log(data)
                }, 1000)
            }
        )
    }
)
/*test*/

