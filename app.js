// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))




// fromEuroToDollar
// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
//fromDollarToYen

const fromDollartoEuro = function(valueInDollar){
    let valueInEuro = Math.floor(valueInDollar / oneEuroIs.USD);
    return valueInEuro;
}
const fromDollarToYen = function(valueInDollar){     
     let valueInYen = fromDollartoEuro(valueInDollar) * oneEuroIs.JPY;
     return valueInYen;
}

// fromYenToPound

const fromYentoEuro = function(valueInYen){
    let valueInEuro = Math.floor(valueInYen / oneEuroIs.JPY);
    return valueInEuro;
}
const fromYenToPound = function(valueInYen){
     let valueInGBP = fromYentoEuro(valueInYen) * oneEuroIs.GBP;
     return valueInGBP;
}

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };