function getNewPerson(age, name, lastName) {
    return {
        age: age,
        name: name,
        lastName: lastName
    };
}

function getArrayOfRandomPeople(howMany) {
    var names = ["Alex", "Brandon", "John", "David", "Frank", "Joey", "Robin", "Marta", "Hanna", "Lisa", "Monica", "Jack"];
    var lastNames = ["Stark", "Smith", "Williams", "Wick", "Lee", "Parker", "Taylor", "Brown", "Steel", "Wood", "Taylor"];
    var minAge = 14;
    var maxAge = 45;

    var array = [];
    var averageAgeControl = 0;
    for (var i = 0; i < howMany; ++i) {
        var randomAge = _.random(minAge, maxAge);
        var randomName = names[Math.floor(Math.random() * names.length)];
        var randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

        array.push(getNewPerson(randomAge, randomName, randomLastName));
        averageAgeControl += randomAge;
    }
    console.log(averageAgeControl / 10);
    return array;
}

var people = getArrayOfRandomPeople(10);
console.log(people);

var averageAge = _.reduce(people, function (memo, person) {
    return memo + person.age / people.length
}, 0);
console.log(averageAge);

var listOfPeopleBetween20And30 = _.chain(people)
    .filter(function (person) {
        return person.age >= 20 && person.age <= 30;
    })
    .sortBy("age")
    .value();
console.log(listOfPeopleBetween20And30);

_.each(people, function (person) {
    _.extend(person, {"fullName" : person.name + " " + person.lastName});
});
