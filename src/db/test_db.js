const mongoose = require('mongoose');

const conn_string = `mongodb://razesi:RAZzesi2021!!@ds349045.mlab.com:49045/zesi`
const db = mongoose.connect(conn_string)
    .then(()=> {
        console.log(`connect to mlab successfullty`);
    })
    .catch(err => {
        console.log(err);
    });

const qtrees = mongoose.find({}, {});

//mongo ds349045.mlab.com:49045/zesi -u razesi -p RAZzesi2021!!