const mongoose = require('mongoose');

const { Schema } = mongoose;

const treeModel = new Schema({
    treeLat: {type: Number},
    treeLon: {type: Number},
    treeId: {type:String},
    treeAddress: {type: String},
    treeAge: {type: Number},
    geometry: {
        type: {type: String, default: "Point"},
        coordinates: {type: Array, default: [0,0]}
    },
    admin: {
        treeCreationDate: {type: Date, default: new Date()},
        treeLastChange: {type: Date, default: new Date()},
        treeCreatorUser: {type: String},
        treeLastChangeUser: {type: String}
    }
//        [
//            26.528273841000043,
//            43.52943259300008
//        ]
});

module.exports = mongoose.model('Tree', treeModel);
