/**
* agregar al objeto result la propiedad role
*
*
* output => {
    id:100,
    name:"foo",
    role:"admin"
};
*/
let result = {
    id:100,
    name:"foo",
};
let role = "admin";

// Example 1
// result['role'] = role;
// Example 2
result.role = role;

//export result
module.exports = result;
