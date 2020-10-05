let mixedDataTypes = [
    'text',
    3,
    new Date(),
    'wow',
    5
]

console.log(mixedDataTypes.length)
console.log(mixedDataTypes[0])
console.log(mixedDataTypes[mixedDataTypes.length-1])
console.log(mixedDataTypes[(mixedDataTypes.length-1)/2])

let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies[(itCompanies.length-1)/2])

itCompanies.forEach(c => console.log(c))
itCompanies.forEach(c => console.log(c.toUpperCase()))
console.log(itCompanies.join(', ')+' are all tech companies.')

function findCo(company) {
    if (itCompanies.includes(company)) {
        return company;
    } else {
        return 'company not found';
    }
}
console.log(findCo(''))

function oFilter() {
    let newArr = []
    itCompanies.forEach(c => {
        if (c.replace(/[^o || O]/g, "").length <= 1) {
            newArr.push(c)
        }
    })
    return newArr
}
console.log(oFilter())

console.log(itCompanies.sort())

console.log(itCompanies.reverse())
console.log(itCompanies.slice(0, 3))
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))
console.log(itCompanies.slice(itCompanies.length/2, itCompanies.length/2+1))
itCompanies.shift()
itCompanies.splice(itCompanies.length/2, 1)
itCompanies.pop()
itCompanies = []
