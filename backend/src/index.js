const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const dataRouter = require('./routes/data.route');
const saveRouter = require('./routes/save.route');

//Database connection
require('./utils/db.util')();

//allow cors
app.use(cors());

//allow plaintext body
app.use(express.text())

app.use('/data', dataRouter);

app.use('/save', saveRouter);

app.listen(PORT, () => {
    console.log("Started listening on", PORT);
});