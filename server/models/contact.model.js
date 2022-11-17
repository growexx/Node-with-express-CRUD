/**
 * @name contact model
 * @author Growexx
 */
const appMongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = new appMongoose.Schema({
    firstName: {
        type: String,
        min: 2,
        max: 30
    },
    lastName: {
        type: String,
        min: 2,
        max: 30
    },
    Phone: {
        type: String,
        max: 10
    }
});

schema.plugin(mongoosePaginate);
schema.plugin(aggregatePaginate);

module.exports = appMongoose.model('contact', schema);
