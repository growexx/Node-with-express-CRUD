const chai = require('chai');
const assert = chai.assert;
const Contact = require('../server/models/contact.model');
describe('Delete records after testcase executed', () => {

    it('Delete user records after test comeplete', (done) => {
        Promise.all([
            Contact.deleteMany()
        ]).then(() => {
            done();
        }).catch(() => {
            assert(true, false);
        });
    });
});
