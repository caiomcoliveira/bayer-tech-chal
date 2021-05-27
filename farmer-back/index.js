const express = require('express');
const cors = require('cors');
const farmersRoute = require('./src/routes/farmer.router');
const app = express();
app.use(cors());
app.use('/api/farmers', farmersRoute);
const port = 3000;




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port} with CORS`);
})