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
        inputTextField.value = "";

        var newNoteRow = document.createElement("tr");
        list.appendChild(newNoteRow);

        var textArea = document.createElement("th");
        textArea.classList.add("note");
        newNoteRow.appendChild(textArea);
        var noteText = document.createElement("span");
        noteText.innerText = text;
        textArea.appendChild(noteText);
        var editArea = document.createElement("input");
        editArea.classList.add("edit-text");
        editArea.value = text;
        textArea.appendChild(editArea);

        var firstButtonArea = document.createElement("th");
        newNoteRow.appendChild(firstButtonArea);
        var editButton = document.createElement("button");
        editButton.classList.add("usual-button");
        editButton.innerText = "Edit";
        firstButtonArea.appendChild(editButton);
        var confirmButton = document.createElement("button");
        confirmButton.classList.add("usual-button");
        confirmButton.innerText = "Confirm";
        firstButtonArea.appendChild(confirmButton);

        var secondButtonArea = document.createElement("th");
        newNoteRow.appendChild(secondButtonArea);
        var deleteButton = document.createElement("button");
        deleteButton.classList.add("usual-button");
        deleteButton.innerText = "Delete";
        secondButtonArea.appendChild(deleteButton);
        var cancelButton = document.createElement("button");
        cancelButton.classList.add("usual-button");
        cancelButton.innerText = "Cancel";
        secondButtonArea.appendChild(cancelButton);

        switchEditOff();

        editButton.addEventListener("click", function () {
            text = noteText.innerText;
            noteText.innerText = "";
            editArea.value = text;
            switchEditOn();
        });

        confirmButton.addEventListener("mouseleave", function () {
            editArea.addEventListener("blur", mouseOutOfEditButtonListener);
        });
        confirmButton.addEventListener("mouseenter", function () {
            editArea.removeEventListener("blur", mouseOutOfEditButtonListener);
        });
        confirmButton.addEventListener("click", function () {
            noteText.innerText = editArea.value;
            switchEditOff();
        });

        deleteButton.addEventListener("click", function () {
            list.removeChild(newNoteRow);
        });

        var mouseOutOfEditButtonListener = function () {
            noteText.innerText = text;
            switchEditOff();
        };

        function switchEditOn() {
            editArea.style.display = "inline";
            editButton.style.display = "none";
            deleteButton.style.display = "none";
            confirmButton.style.display = "block";
            cancelButton.style.display = "block";
            editArea.focus();
        }

        function switchEditOff() {
            editArea.style.display = "none";
            editButton.style.display = "block";
            deleteButton.style.display = "block";
            confirmButton.style.display = "none";
            cancelButton.style.display = "none";
        }
    });

    inputTextField.addEventListener("focus", function () {
        inputTextField.classList.remove("invalid");
    });
});