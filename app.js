var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions ={
    origin: 'http://192.168.0.101:3000', 
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const route = require('./app/routes/index.rowte');
route(app);

var port = process.env.PORT || 8090;
app.listen(port);
console.log('Server is running at ' + port);