
var greet = function(name) {
    name = name.toLowerCase()
    let capName = name[0].toUpperCase() + name.slice(1)
    return `Hello ${capName}!`
};