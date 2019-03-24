"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var inputTextField = document.querySelector(".new-text");
    var list = document.querySelector(".list");
    var createButton = document.querySelector(".create-button");
    var editArea = document.querySelector(".edit-text");

    function swipeVisibility(element1, element2) {
        var temp = element1.style.display;
        element1.style.display = element2.style.display;
        element2.style.display = temp;
    }

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
        noteDeleteArea.style.display = "inline";
        newNoteArea.appendChild(noteDeleteArea);
        var noteEditConfirmArea = document.createElement("th");
        noteEditConfirmArea.innerHTML = "<button class='confirm-button' type='button'>Confirm</button>";
        noteEditConfirmArea.style.display = "none";
        newNoteArea.appendChild(noteEditConfirmArea);
        var noteEditButtonArea = document.createElement("th");
        noteEditButtonArea.style.display = "inline";
        newNoteArea.appendChild(noteEditButtonArea);
        var cancelButtonArea = document.createElement("th");
        cancelButtonArea.innerHTML = "<button class='cancel-button' type='button'>Cancel</button>";
        cancelButtonArea.style.display = "none";
        newNoteArea.append(cancelButtonArea);

        noteText.innerText = text;
        noteText.classList.add("note");

        noteDeleteArea.innerHTML = "<button class='delete-button' type='button'>Delete</button>";
        noteDeleteArea.firstChild.addEventListener("click", function () {
            list.removeChild(newNoteArea);
        });

        noteEditButtonArea.innerHTML = "<button class='edit-button' type='button'>Edit</button>";
        noteEditButtonArea.firstChild.addEventListener("click", function () {
            var originalText = noteText.innerText;

            editArea.value = originalText;
            noteText.innerText = "";
            noteText.append(editArea);
            editArea.focus();

            swipeVisibility(noteDeleteArea, noteEditConfirmArea);
            swipeVisibility(noteEditButtonArea, cancelButtonArea);

            function hideEditInputAndSetText(text) {
                noteText.innerText = text;
                document.querySelector(".ninja").append(editArea);
                swipeVisibility(noteDeleteArea, noteEditConfirmArea);
                swipeVisibility(noteEditButtonArea, cancelButtonArea);
            }

            function leaveOriginalText() {
                hideEditInputAndSetText(originalText);
            }

            editArea.addEventListener("blur", leaveOriginalText);
            noteEditConfirmArea.firstChild.addEventListener("mouseenter", function () {
                editArea.removeEventListener("blur", leaveOriginalText);
            });
            noteEditConfirmArea.firstChild.addEventListener("mouseleave", function () {
                editArea.addEventListener("blur", leaveOriginalText);
            });

            noteEditConfirmArea.firstChild.addEventListener("click", function () {
                hideEditInputAndSetText(editArea.value);
            });
        });

        list.appendChild(newNoteArea);
        inputTextField.value = "";
    });

    inputTextField.addEventListener("focus", function () {
        inputTextField.classList.remove("invalid");
    });
});