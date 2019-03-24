"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var inputTextField = document.querySelector(".new-text");
    var list = document.querySelector(".list");

    var createButton = document.querySelector(".create-button");
    createButton.addEventListener("click", function () {
        var text = inputTextField.value;

        if (text === "") {
            inputTextField.classList.add("invalid");
            return;
        }

        var newNoteArea = document.createElement("tr");

        var noteText = document.createElement("th");
        newNoteArea.appendChild(noteText);
        var noteDeleteArea = document.createElement("th");
        newNoteArea.appendChild(noteDeleteArea);
        var noteEditArea = document.createElement("th");
        newNoteArea.appendChild(noteEditArea);

        noteText.innerText = text;
        noteText.classList.add("note");

        noteDeleteArea.innerHTML = "<button class='delete-button' type='button'>Delete</button>";
        noteDeleteArea.firstChild.addEventListener("click", function() {
            list.removeChild(newNoteArea);
        });

        noteEditArea.innerHTML = "<button class='edit-button' type='button'>Edit</button>";
        noteEditArea.firstChild.addEventListener("click", function() {
            //TODO
        });

        list.appendChild(newNoteArea);
        inputTextField.value = "";
    });
    inputTextField.addEventListener("focus", function () {
        inputTextField.classList.remove("invalid");
    })
});