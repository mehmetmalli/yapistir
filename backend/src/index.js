const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;
let content;

//allow cors
app.use(cors());

//allow plaintext body
app.use(express.text())

app.post('/save', (req, res) => {
    console.log(req.body);
    content = req.body;
    res.status(200).json({
        message: "Success", 
        content
    })
});

app.get('/data', (req, res) => {
    res.status(200).json({content})
});

app.listen(PORT, () => {
    console.log("Started listening on", PORT);
})