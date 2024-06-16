const express = require("express");
const app = express();
const port = 8000;
const url = "https://discord.com/api/webhooks/1251676621337919530/rI0mwiHZ5ajzF-Lez9dl7hw14q7BsFzlRXxhynofuqvqA8GuiwLAdOhTuTmniHZyINvk"

app.use(express.json());

app.post("/", (req, res) => {
    let reqBody = createEmbedMessage(JSON.parse(req.body.user), JSON.stringify(req.body.accuracy), JSON.parse(req.body.accuracy))

    fetch(url, {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(reqBody)
    }
     );
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