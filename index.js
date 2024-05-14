
const askedQuestions = {
    0: {
        question: "Do you accept all credit cards?",
        answer: "Yes we accept all major credit cards. You can also pay cash",
    },
    1: {
        question: "Do you use organic ingredients for all of your recipes?",
        answer: "All of the ingredients are organic. They have given enough time to grow under the best condotions.",
    },
    2: {
        question: "Do you support local farmers?",
        answer: "Yes, we support local farmers. They are the main reason our ingredients are fresh every day.",
    },
}


plusButtons = document.querySelectorAll(".button-plus");
plusFilledButtons = document.querySelectorAll(".button-plus-fill");


for(let j = 0; j < plusFilledButtons.length; j++){

    document.addEventListener("DOMContentLoaded", () => {
        plusFilledButtons[j].classList.add("hidden");
        document.getElementsByClassName("answer")[j].classList.add("hidden");
    })
}

for(let i = 0; i < plusButtons.length; i++){

    plusButtons[i].addEventListener("click", () => {
        plusFilledButtons[i].classList.remove("hidden");
        document.getElementsByClassName("answer")[i].classList.remove("hidden");
        plusButtons[i].classList.add("hidden");
    })
}

for(let k = 0; k < plusButtons.length; k++){

    plusFilledButtons[k].addEventListener("click", () => {
        document.getElementsByClassName("button-plus-fill")[k].classList.add("hidden");
        document.getElementsByClassName("answer")[k].classList.add("hidden");
        document.getElementsByClassName("button-plus")[k].classList.remove("hidden");
    })
}