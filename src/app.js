const express = require('express');
const app = express();
const port = process.env.PORT || 4500;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const conn_string = `mongodb://razesi:RAZzesi2021!!@ds349045.mlab.com:49045/zesi`
const db = mongoose.connect(conn_string)
    .then(()=> {
        console.log(`connect to mlab successfullty`);
    })
    .catch(err => {
        console.log(err);
    });
const Tree = require('./models/trees');
const treeRouter = require('./router/treeRouter')(Tree);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', treeRouter);

app.get('/', (req, res)=> {
    res.send('Wellcome to MapsLab.io NodeJS API');
});

app.listen(port, ()=> {
    console.log(`running on port ${port}`);
});
