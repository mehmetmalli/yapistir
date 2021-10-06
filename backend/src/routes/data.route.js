const router = require('express').Router();
const Data = require('../models/data.model');

router.get('/', (req, res) => {
    const { id } = req.query;
    Data.findOne({
        _id: id
    }).then((data) => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).json({
            message: 'Operation failed.',
            error
        });
    });
});

module.exports = router;