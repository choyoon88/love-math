document.addEventListener("DOMContentLoaded", function() {
    // ^action the function inside this {} once the domcontent is loaded
    let buttons = document.getElementsByTagName("button");
    // ^get all the tag name button as an array

    // "let button of buttons" are more modern than "i = 0; i < buttons.length; i++"
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") { //'this' refers to the button just clicked
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type"); //gameType to the value of that attribute
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}