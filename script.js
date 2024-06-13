// important variables
const input = document.getElementById("textInput");
const factor1 = document.getElementById("factor1");
const factor2 = document.getElementById("factor2")

let remaining = [];
let current;
let errorCount = 0;


class Numbers {
    constructor(f1, f2,) {
        this.factor1 = f1;
        this.factor2 = f2;
        this.product = f1 * f2;
    }
}

//Runs on loading of page
// Initiate the factors
for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= 100; j++) {
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
            sendResults();
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

    fetch("URL GOES HERE", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    }); //TODO
}