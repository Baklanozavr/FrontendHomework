Vue.component("note-li", {
    props: ["note"],
    data: function () {
        return {
            draftNote: this.note.text,
            isEditNow: false,
            isReadyToConfirm: true,
            isInputDataInvalid: false
        };
    },
    template: "#note-tr-template",
    methods: {
        cancelChanges: function () {
            this.draftNote = this.note.text;
            this.isEditNow = false;
            this.isInputDataInvalid = false;
        },
        cancelChangesIfPossible: function () {
            if (!this.isReadyToConfirm) {
                this.cancelChanges();
            }
        },
        changeThisNote: function () {
            if (this.draftNote === "") {
                this.isInputDataInvalid = true;
                this.$refs.draftInput.focus();
                return;
            }
            this.$emit("change-note", this.note, this.draftNote);
            this.cancelChanges();
        },
        deleteThisNote: function () {
            this.$emit("remove-note", this.note);
        },
        editThisNote: function () {
            this.draftNote = this.note.text;
            this.isEditNow = true;
            this.isReadyToConfirm = true;
            this.$refs.draftInput.focus();
        },
        switchConfirmationPermission: function () {
            this.isReadyToConfirm = !this.isReadyToConfirm;
        }
    }
});

new Vue({
    el: "#noteList",
    data: {
        inputText: "",
        isInputDataInvalid: false,
        notes: [],
        counter: 0
    },
    methods: {
        addNote: function () {
            if (this.inputText === "") {
                this.isInputDataInvalid = true;
                return;
            }
            this.notes.push({
                id: this.counter,
                text: this.inputText
            });
            this.inputText = "";
            ++this.counter;
            this.$emit("blur");
        },
        changeNote: function (note, draft) {
            var indexOfInputNote = this.notes.indexOf(note);
            this.notes[indexOfInputNote].text = draft;
        },
        cleanInputClass: function () {
            this.isInputDataInvalid = false;
        },
        removeNote: function (note) {
            this.notes = this.notes.filter(function (element) {
                return element.id !== note.id;
            })
        }
    }
});
