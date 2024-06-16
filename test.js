
const url = "https://webhook-handler-mcyp.onrender.com"
const webhook = "https://discord.com/api/webhooks/1251676621337919530/rI0mwiHZ5ajzF-Lez9dl7hw14q7BsFzlRXxhynofuqvqA8GuiwLAdOhTuTmniHZyINvk";

// let requestData = {
//     user: "test",
//     accuracy: "test2",
//     time: "test3"
// }

let req = {
    body: {
        user: "test",
        time: "test2",
        accuracy: "test3"
    }
}

let reqBody = createEmbedMessage(req.body.user, req.body.time, req.body.accuracy);

fetch(webhook, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody)
}) //TODO
.then((res) => {
    console.log("hi");
})


function createEmbedMessage(name, time, acc) {
    let request = {
        embeds: [
            {
                title: "test",
                description: "test",
                color: 1334988,
                fields: [
                    {
                        name: "Name",
                        value: name,
                        inline: true
                    },
                    {
                        name: "Time",
                        value: time,
                        inline: true
                    },
                    {
                        name: "Accuracy",
                        value: acc + "%",
                        inline: false
                    }
                ]
            }
        ]
    }
    return request; 
}