const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

//allow cors
app.use(cors());

//allow plaintext body
app.use(express.text())

app.post('/save', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "Success"
    })
});

app.listen(PORT, () => {
    console.log("Started listening on", PORT);
})