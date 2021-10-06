const { Schema, model } = require('mongoose');

//define the object model for data
const schema = Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = model('Data', schema);