function get_array_of_random_numbers(how_many) {
    var array = [];
    for (var i = 0; i < how_many; ++i) {
        array.push(Math.round(Math.random() * 100))
    }
    console.log(array);
    return array;
}

function get_array_of_growing_numbers(first_element, total_number_of_elements) {
    var growing_numbers_array = [];
    for (var i = first_element; i < total_number_of_elements + first_element; ++i) {
        growing_numbers_array.push(i);
    }
    console.log(growing_numbers_array);
    return growing_numbers_array;
}

var array_of_random_numbers = get_array_of_random_numbers(9);

array_of_random_numbers.sort(function (a, b) {
    return a - b;
});
console.log(array_of_random_numbers);

var first_five_elements = array_of_random_numbers.slice(0, 5);
console.log(first_five_elements);

var last_five_elements = array_of_random_numbers.slice(array_of_random_numbers.length - 5);
console.log(last_five_elements);

var sum = 0;
array_of_random_numbers.forEach(function (element) {
    if (element % 2 === 0) {
        sum += element;
    }
});
console.log(sum);

var hundred_numbers_array = get_array_of_growing_numbers(1, 100);

var squares_of_evens_array = [];
hundred_numbers_array.forEach(function (element) {
    if (element % 2 === 0) {
        squares_of_evens_array.push(element * element);
    }
});
console.log(squares_of_evens_array);
