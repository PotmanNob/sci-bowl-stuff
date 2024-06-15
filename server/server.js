const express = require("express");
const app = express();



app.get("/", (req, res) => {


    fetch("https://discord.com/api/webhooks/1250633753798377482/4rgMyymu5vEw5pE2itULfVdMlFKoy0LgPEDSDlJawfckfz0ZD0672-9Bly2RHx7yOBuR",{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(request)
    }
     ); //DISCORD WEBHOOK GOES HERE
    res.send("Done");
    
})

function createEmbedMessage() {
    let request = {
        embeds: [
            {
                title: "test",
                description: "test",
                color: 1334988,
                fields: [
                    {
                        name: "Name",
                        value: "test 1",
                        inline: true
                    },
                    {
                        name: "Time",
                        value: "Test 2",
                        inline: true
                    },
                    {
                        name: "Accuracy",
                        value: "Test" + "%",
                        inline: false
                    }
                ]
            }
        ]
    }
    return request; 
}