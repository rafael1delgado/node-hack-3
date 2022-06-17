/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result
*
*
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let i = 1;
let len = arr.length - 1;

for(;i < len; i++) {
    let value = Object.values(arr[i])[0];
    result.push(value);
}

//export result
module.exports = result;
