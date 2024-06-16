const express = require("express");
const app = express();
const port = 8000;
const webhook = "https://discord.com/api/webhooks/1251735970710028380/VJo4FV7iCCGRHxhMrv6KlLwOpBtDrRqsyHGejQB4E5pRtQ825PrIOEnfWJWV8I8-HITk"

app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body.user);
    console.log(req.body.time);
    console.log(req.body.accuracy);
    let reqBody = createEmbedMessage(req.body.user, req.body.time, req.body.accuracy)

    fetch(webhook, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    }) 
    .then((data) => {
        console.log("hi");
        console.log(data);
    })
    .catch( (err) => {
        console.log(err);
    })

    res.json({message: "Done"});
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
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