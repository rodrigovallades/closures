
const products = {
  'Store 1': {
    bikes: [
      { type: 'sports', engine: '1000' }, { type: 'trail', engine: '800' }
    ]
  },
  'Store 2': {
    bikes: [
      { type: 'cruiser', engine: '1300' }, { type: 'scooter', engine: '50' }
    ]
  },
};

const fromStore = getFromStore(products, 'Store 1')
const getBikes = fromStore('bikes')
const bikes = getBikes(2)

function getFromStore(arr, key) {
    const garden = arr[key]
    return function(fruit) {
        const fruits = garden[fruit]
        return function(qty) {
            return fruits.slice(0, qty)
        }
    }
}

const output1 = document.createElement('pre')
output1.innerHTML = `products = ${JSON.stringify(products, undefined, 2)}`
document.body.appendChild(output1)

document.body.appendChild(document.createElement('hr'))

const output2 = document.createElement('pre')
output2.innerHTML = `After running function 'getFromStore', got these bikes from "Store 1":

${JSON.stringify(bikes, undefined, 2)}`
document.body.appendChild(output2)

console.log(products)
console.log(bikes)
