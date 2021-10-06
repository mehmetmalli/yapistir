const router = require('express').Router();
const Data = require('../models/data.model');

router.post('/', (req, res) => {
    new Data(JSON.parse(req.body)).save().then((data) => {
        res.status(200).json({
            message: 'Operation completed successfully.',
            id: data._id
        });
    }).catch((error) => {
        res.status(500).json({
            message: 'Operation failed.',
            error
        });
    });
});

module.exports = router;