function getNewCity(name, population) {
    return {
        name: name,
        population: population
    };
}

function f() {
    
}

var msk = getNewCity("Москва", 12000000);
var spb = getNewCity("Санкт-Петербург", 5000000);
var nsk = getNewCity("Новосибирск", 1400000);
var ekb = getNewCity("Екатеринбург", 1200000);

var ny = getNewCity("НьюЙорк", 8623000);
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