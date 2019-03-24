function getNewCity(name, population) {
    return {
        name: name,
        population: population
    };
}

function getCountriesWithMaxNumberOfCities(countries) {
    var result = [];
    var maxNumberOfCities = 1;
    countries.forEach(function (country) {
        if (country.cities.length < maxNumberOfCities) {
            return;
        } else if (country.cities.length > maxNumberOfCities) {
            maxNumberOfCities = country.cities.length;
            result = [];
        }
        result.push(country);
    });
    return result;
}

function getSumOfPopulationForEachCountry(countries) {
    var result = {};
    countries.forEach(function (country) {
        result[country.name] = country.cities.reduce(function (currentSum, city) {
            return city.population + currentSum;
        }, 0)
    });
    return result;
}

var msk = getNewCity("Москва", 12000000);
var spb = getNewCity("Санкт-Петербург", 5000000);
var nsk = getNewCity("Новосибирск", 1400000);
var ekb = getNewCity("Екатеринбург", 1200000);

var ny = getNewCity("Нью Йорк", 8623000);
var sf = getNewCity("Сан Франциско", 884363);
var wt = getNewCity("Вашингтон", 702455);
var bt = getNewCity("Бостон", 685094);

var pek = getNewCity("Пекин", 21705000);
var shh = getNewCity("Шанхай", 24152700);
var gkg = getNewCity("Гонконг", 7500000);

var russia = {
    name: "Россия",
    cities: [msk, spb, nsk, ekb]
};
var usa = {
    name: "США",
    cities: [ny, sf, wt, bt]
};
var china = {
    name: "Катай",
    cities: [pek, shh, gkg]
};

var countries = [russia, usa, china];

var countriesWithMaxNumberOfCities = getCountriesWithMaxNumberOfCities(countries);
console.log(countriesWithMaxNumberOfCities);

var listOfCountriesWithSumPopulation = getSumOfPopulationForEachCountry(countries);
console.log(listOfCountriesWithSumPopulation);