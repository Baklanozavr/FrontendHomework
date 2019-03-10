var numbers_array = [2, 3, 7, 5, 0, 12, 645, 1, 33];
numbers_array.sort(function (a, b) {
    return a - b;
});

var first_five_elements = numbers_array.slice(0, 5);
var last_five_elements = numbers_array.slice(numbers_array.length - 5);

var sum = 0;
numbers_array.forEach(function (element) {
    if (element % 2 === 0) {
        sum += element;
    }
});

function get_array_of_growing_numbers(first_element, total_number_of_elements) {
    var growing_numbers_array = [];
    for (var i = first_element; i < total_number_of_elements + first_element; ++i) {
        growing_numbers_array.push(i);
    }
    console.log(growing_numbers_array);
    return growing_numbers_array;
}

var hundred_numbers_array = get_array_of_growing_numbers(1, 100);

var squares_of_evens_array = [];
hundred_numbers_array.forEach(function (element) {
    if (element % 2 === 0) {
        squares_of_evens_array.push(element * element);
    }
});