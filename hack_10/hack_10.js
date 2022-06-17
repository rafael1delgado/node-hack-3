/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result = {
    id: foo.id,
    name: "Foo",
    roles: [foo.roles[0].toUpperCase(), roleSuperUser, roleUser],
    skills: [
        capitalizeFirstLetter(skills[0]),
        capitalizeFirstLetter(skills[1]),
        capitalizeFirstLetter(foo.skills[0]),
        foo.skills[1].toUpperCase(),
        foo.skills[2].toUpperCase(),
        capitalizeFirstLetter(skills[2]),
        capitalizeFirstLetter(foo.skills[3]),
        capitalizeFirstLetter(foo.skills[4]),
        capitalizeFirstLetter(foo.skills[5]),
        capitalizeFirstLetter(foo.skills[6]),
        capitalizeFirstLetter(skills[3]),
    ],
    levels: [
        { LEVEL: (levels[0]['LEVEL'][0] + levels[0]['LEVEL'][2]).toUpperCase() },
        { LEVEL: (levels[1]['LEVEL'][0] + levels[1]['LEVEL'][2]).toUpperCase() },
        { LEVEL: (levels[2]['LEVEL'][0] + levels[2]['LEVEL'][2]).toUpperCase() }
    ]
}

function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

//export result
module.exports = result;