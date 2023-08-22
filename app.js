const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;
const dbConnection = require('./db/dbConnections');

const Metrics = require('./routes/trackMetrics');
app.use('',Metrics);

app.listen(PORT,() => {
    dbConnection()
    console.log(`Servers connected to PORT: ${PORT}`);
})