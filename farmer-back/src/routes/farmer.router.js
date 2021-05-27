const express = require('express');
const { FarmerController } = require('../controllers/FarmerController');

const router = express.Router();

const {
    allFarmers
} = require('../mocks/mock-farmers');


router.route('/')
    .get((req, res) => {
        try {
            const fc = new FarmerController();
            const farmers = fc.searchByDocumentNumberOrName(req.query.search);
            res.send(farmers).status(200);
        } catch (e) {
            res.send(e).status(500);
        }
    });


module.exports = router;