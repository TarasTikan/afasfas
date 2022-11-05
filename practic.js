// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

// const letMeSeeYourName = callback =>{
//   const names = prompt("What is your name");
//     if(!names) {
//      console.log('not is write name')
//     } 
//     callback(names)
// }

// const greet = name => {
//     console.log(`hello ${name}`)
// }
//   letMeSeeYourName(greet)

// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Math.random()
//   }
//   callback(product)
// }
// const showProduct = products => console.log(products)
// makeProduct('Berli', 500, showProduct )

// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }
// product.showPrice()

// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }

// function callAction(action) {
//   action()
// }

// // =====================================================
// callAction(product.showPrice.bind(product))

// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
//     яка пам"ятає ім"я шефа під час свого виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`)
// }

function makeShef(shefName) {
  return function makeDish (dish) {
    console.log(`${shefName} is cooking ${dish}`)
  }
}

const mango = makeShef('Mango')
mango = makeShef('apple pie')
// makeDish('Mango', 'apple pie')
// makeDish('Poly', 'muffins')
