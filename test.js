
const url = "https://webhook-handler-mcyp.onrender.com"

let requestData = {
    user: "test",
    accuracy: "test2",
    time: "test3"
}

fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
}) //TODO
.then((res) => {
    console.log("hi");
})