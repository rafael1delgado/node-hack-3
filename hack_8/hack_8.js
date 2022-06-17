/**
* agregar las propiedades del objeto foo al array result,
* cada propiedad dentro de un array, con 2 items,
* que se representa con la clave y el valor
* debes utilizar for ó while
*
*
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];
let i = 0;
let keys = Object.keys(foo);
let values = Object.values(foo);
let len = keys.length;

while(i < len) {
    result.push([keys[i], values[i]]);
    i++;
}
//export result
module.exports = result;
