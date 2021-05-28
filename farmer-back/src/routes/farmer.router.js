const express = require('express');
const { FarmerController } = require('../controllers/FarmerController');


const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        try {
            const fc = new FarmerController();
            const farmers = await fc.searchByDocumentNumberOrName(req.query.search);
            res.send(farmers).status(200);
        } catch (e) {
            res.send(e).status(500);
        }
    })
    .post(async (req,res) => {
        try {
            const fc = new FarmerController();
            const f = await fc.createFarmer(req.body);
            res.send(f).status(200);
        } catch (e) {
            res.send(e).status(500);
        } 
    });
    
    


module.exports = router;