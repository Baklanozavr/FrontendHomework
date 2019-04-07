"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector(".input");
    var outputF = document.querySelector(".fahrenheit-output");
    var outputK = document.querySelector(".kelvin-output");
    var convertButton = document.querySelector(".convert-button");

    input.focus();

    input.addEventListener("focus", function () {
        input.placeholder = "Celsius input";
        input.classList.remove("invalid");
        input.value = "";
        outputF.value = "";
        outputK.value = "";
    });

    convertButton.addEventListener("click", function () {
        var celsiusTemperature = + input.value;

        if (isNaN(celsiusTemperature) || input.value === "") {
            if (celsiusTemperature !== 0) {
                input.placeholder = "Only digits!";
                input.value = "";
            }
            input.classList.add("invalid");
            return;
        }

        if (celsiusTemperature < -273.15) {
            input.placeholder = input.value + " too low!";
            input.value = "";
            input.classList.add("invalid");
            return;
        }

        input.value = celsiusTemperature.toFixed(2) + " \u2103";
        outputF.value = convertToFahrenheit(celsiusTemperature) + " \u2109";
        outputK.value = convertToKelvin(celsiusTemperature) + " \u212A";

        function convertToFahrenheit(temperature) {
            return (temperature * 1.8 + 32).toFixed(2);
        }
        function convertToKelvin(temperature) {
            return (temperature + 273.15).toFixed(2);
        }
    });
});