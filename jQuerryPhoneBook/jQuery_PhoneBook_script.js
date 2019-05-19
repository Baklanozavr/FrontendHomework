"use strict";

$(function () {
    var inputTextField = $(".new-text")
        .focus(function () {
            inputTextField.removeClass("invalid");
        });

    var list = $(".list");

    var createButton = $(".create-button");
    createButton.click(function () {
        var text = inputTextField.val();

        if (text === "") {
            inputTextField.addClass("invalid");
            return;
        }
        inputTextField.val("");

        var newNoteRow = $("<tr></tr>")
            .appendTo(list);

        var textArea = $("<td></td>")
            .addClass("note")
            .appendTo(newNoteRow);

        var noteText = $("<span></span>")
            .text(text)
            .appendTo(textArea);

        var editArea = $("<input>")
            .addClass("edit-text")
            .val(text)
            .appendTo(textArea);

        var firstButtonArea = $("<td></td>")
            .appendTo(newNoteRow);
        var editButton = $("<button>Edit</button>")
            .addClass("usual-button")
            .appendTo(firstButtonArea);
        var confirmButton = $("<button>Confirm</button>")
            .addClass("usual-button")
            .appendTo(firstButtonArea);

        var secondButtonArea = $("<td></td>")
            .appendTo(newNoteRow);
        var deleteButton = $("<button>Delete</button>")
            .addClass("usual-button")
            .appendTo(secondButtonArea);
        var cancelButton = $("<button>Cancel</button>")
            .addClass("usual-button")
            .appendTo(secondButtonArea);

        switchEditOff();

        editButton.click(function () {
            text = noteText.text();
            noteText.text("");
            editArea.val(text);
            switchEditOn();
        });

        confirmButton.mouseleave(function () {
            editArea.blur(mouseOutOfEditButtonListener);
        });
        confirmButton.mouseenter(function () {
            editArea.off("blur", mouseOutOfEditButtonListener);
        });
        confirmButton.click(function () {
            noteText.text(editArea.val());
            switchEditOff();
        });

        deleteButton.click(function () {
            newNoteRow.remove();
        });

        var mouseOutOfEditButtonListener = function () {
            noteText.text(text);
            switchEditOff();
        };

        function switchEditOn() {
            editArea.show().focus();
            confirmButton.show();
            cancelButton.show();
            editButton.hide();
            deleteButton.hide();
        }

        function switchEditOff() {
            editArea.hide();
            confirmButton.hide();
            cancelButton.hide();
            editButton.show();
            deleteButton.show();
        }
    });
});