const express = require('express');
const cors = require('cors');
const {
    allFarmers
} = require('./src/mocks/mock-farmers');

const app = express();
app.use(cors());
const port = 3000;



app.get('/api/farmers', (req, res) => {
    try {
        const search = req.query.search.toLowerCase();
        const farmers = allFarmers.filter(
            f => f.name.toLowerCase().includes(search) || f.document.documentNumber.includes(search)
        );
        res.send(farmers).status(200);
    } catch (e) {
        res.send(e).status(500);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} with CORS`);
})