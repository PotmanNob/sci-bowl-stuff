// important variables
const input = document.getElementById("textInput");
const factor1 = document.getElementById("factor1");
const factor2 = document.getElementById("factor2");
const timeBox = document.getElementById("timeBox");
const url = "https://webhook-handler-mcyp.onrender.com";

let remaining = [];
let current;
let errorCount = 0;

let hours = 0;
let minutes = 0;
let seconds = 0;


class Numbers {
    constructor(f1, f2,) {
        this.factor1 = f1;
        this.factor2 = f2;
        this.product = f1 * f2;
    }
}

//Runs on loading of page
// Initiate the factors
for (let i = 1; i <= 1; i++) {
    for (let j = 1; j <= 1; j++) {
        remaining.push(new Numbers(i, j));
    }
}

//Randomize
for (let i = 0; i < remaining.length; i++) {
    let chosen = Math.floor(Math.random() * remaining.length);
    let temp = remaining[i];
    remaining[i] = remaining[chosen];
    remaining[chosen] = temp;

}

displayNewValues();
setInterval(timer, 1000)
//--------------------------------------------------


//Event listener
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        let answer = input.value;
        input.value = "";

        if (answer == current.product) {
            remaining.shift();
            displayNewValues();
        } else {
            alert("Wrong Answer");
            errorCount++;
        }

    }
});
//functions
function displayNewValues() {
    if (remaining.length <= 0)
        {
            sendResults("test", 10, 100);
            alert("ok your done now");
        }
    console.log(remaining);
    current = remaining[0];
    console.log(current);
    factor1.innerHTML = current.factor1;
    factor2.innerHTML = current.factor2;
}

function sendResults(name, acc, time) {
    let requestData = {
        user: name,
        accuracy: acc,
        time: time
    }

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }); //TODO
}
function timer() {
    let timeStr = "";

    seconds++;

    if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
    if (minutes >= 60)
        {
            hours++;
            minutes = 0;
        }

    timeStr = `${hours}:`
    if (minutes < 10)
        timeStr += "0";
    timeStr += `${minutes}:`
    if (seconds < 10)
        timeStr += "0";
    timeStr += `${seconds}`;

    timeBox.innerHTML = timeStr;
}