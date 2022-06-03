// Find Maximum and Minimum Values of a List

var min = function(list){
    list.sort((a,b) => (a - b))
    return list[0];
}

var max = function(list){
    list.sort((a,b)  => (b - a))
    return list[0];
}

var min = function(list){
    list.sort((a,b) => (a - b))
    return list[0];
}

var max = function(list){
    list.sort((a,b) => (b - a))
    return list[0];
}

var min = function(list){
    list.sort((a, b) => (a - b))
    return list[0]
}

var max = function(list){
    list.sort((a, b) => (b - a))
    return list[0]
}
console.log(min([4,6,2,1,9,63,-134,566]))
console.log(min([42, 54, 65, 87, 0]))
console.log(max([4,6,2,1,9,63,-134,566]))
console.log(max([5]))

// Shorthand solution:

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);