
// ES5 Map Callback:
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }


// ES2015 Version:
const double = arr => arr.map(val => val * 2);

const squareAndFindEvens = numbers => {
    let squares = numbers.map(num => {
        return num ** 2;
    });
    let evens = squares.filter(square => {
        return square % 2 === 0;
    });
    return evens;
}
