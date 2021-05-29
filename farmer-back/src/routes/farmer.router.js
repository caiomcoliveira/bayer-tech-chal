const express = require('express');
const { FarmerController } = require('../controllers/FarmerController');


const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        try {
            if (req.query.search == undefined) {
                throw {
                    name: 'Invalid Params',
                    details: 'Search Param is Required'
                }
            }
            const fc = new FarmerController();
            const farmers = await fc.searchByDocumentNumberOrName(req.query.search);
            res.status(200).send(farmers);
        } catch (e) {
            res.status(500).send(e);
        }
    })
    .post(async (req, res) => {
        try {
            const fc = new FarmerController();
            const f = await fc.createFarmer(req.body);
            res.status(200).send(f);
        } catch (e) {
            res.status(500).send(e);
        }
    });




module.exports = router;