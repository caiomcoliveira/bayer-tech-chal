const express = require('express');
const cors = require('cors');
const farmersRoute = require('./src/routes/farmer.router');
const sequelize = require('./src/config/dbConfig');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/farmers', farmersRoute);
const port = 3000;

sequelize.sync().then(
    ()=>{
        console.log("DB Running")
    }
);




const server = app.listen(port,  () => {    
    console.log(`Example app listening at http://localhost:${port} with CORS`);
});
module.exports = server;