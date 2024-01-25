const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LogSchema = new Schema({
    title: { type: String },
    entry: { type: String },
    isShipDamaged: { type: Boolean },
});

const captainsLog = mongoose.model('captainsLog', LogSchema);

module.exports = captainsLog;   