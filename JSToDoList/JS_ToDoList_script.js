"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var newTextField = document.querySelector(".new-text");
    var list = document.querySelector(".list");

    var createButton = document.querySelector(".create-button");
    createButton.addEventListener("click", function () {
        var text = newTextField.value;
        if (text === "") {
            newTextField.classList.add("invalid");
            return;
        }

        var li = document.createElement("li");
        li.innerHTML = "<span></span>\
        <button class='delete-button' type='button'>Delete</button>\
        <button class='edit-button' type='button'>Edit</button>";

        li.children[0].innerText = text;
        li.children[1].addEventListener("click", function() {
            list.removeChild(li);
        });
        li.children[2].addEventListener("click", function() {
            //TODO
        });

        list.appendChild(li);
        newTextField.value = "";
    });
    newTextField.addEventListener("focus", function () {
        newTextField.classList.remove("invalid");
    })
});