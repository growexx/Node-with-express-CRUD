const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const assert = chai.assert;
const request = require('supertest');
const TestCase = require('./contacts');
chai.use(chaiHttp); 

describe('List contact details', () => {
    try {
        it('As a User, I should able to list contact details without any params', async () => {
            const res = await request(process.env.BASE_URL)
                .get('/contacts');
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });

        it('As a User, I should able to list contacts with page param', async () => {
            const res = await request(process.env.BASE_URL)
                .get('/contacts')
                .query({ page: 1 });
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });

        it('As a User, I should able to list contacts with page and limit params', async () => {
            const res = await request(process.env.BASE_URL)
                .get('/contacts')
                .query({ page: 1, limit: 10 });
            expect(res.body.status).to.be.status;
            assert.equal(res.statusCode, 200);
        });
    } catch (exception) {
        CONSOLE_LOGGER.error(exception);
    }
});

describe('Add Contacts', () => {
    TestCase.contactsValidation.forEach((data) => {
        it(data.it, async () => {
            const res = await request(process.env.BASE_URL)
                .post('/contacts/add')
                .send(data.options);
            expect(res.body.status).to.be.status;
            assert.equal(res.body.status, data.status);
        });
    });

    it('As a Admin, I should able to add contact', async () => {
        const data = {
            firstName: 'First',
            lastName: 'Last',
            Phone: '9898989898'
        };
        const res = await request(process.env.BASE_URL)
            .post('/contacts/add')
            .send(data);
        expect(res.body.status).to.be.status;
        assert.equal(res.statusCode, 200);
    });
});

describe('Delete Contacts', () => {
    TestCase.deleteContact.forEach((data) => {
        it(data.it, async () => {
            const res = await request(process.env.BASE_URL)
                .delete('/contacts/delete')
                .send(data.options);
            expect(res.body.status).to.be.status;
            assert.equal(res.body.status, data.status);
        });
    });

    it('As a Admin, I should able to Delete contact', async () => {
        const data = {
            id: '5f083c352a7908662c33453c'
        };
        const res = await request(process.env.BASE_URL)
            .delete('/contacts/delete')
            .send(data);
        expect(res.body.status).to.be.status;
        assert.equal(res.statusCode, 200);
    });
});

describe('Edit Contacts', () => {
    TestCase.deleteContact.forEach((data) => {
        it(data.it, async () => {
            const res = await request(process.env.BASE_URL)
                .put('/contacts/edit')
                .send(data.options);
            expect(res.body.status).to.be.status;
            assert.equal(res.body.status, data.status);
        });
    });

    it('As a Admin, I should able to edit contact', async () => {
        const data = {
            id: '5f083c352a7908662c33453c',
            firstName: 'Test',
            lastName: 'Last',
            Phone: '9898989898'
        };
        const res = await request(process.env.BASE_URL)
            .put('/contacts/edit')
            .send(data);
        expect(res.body.status).to.be.status;
        assert.equal(res.statusCode, 200);
    });
});