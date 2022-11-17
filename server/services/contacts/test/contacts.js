module.exports = {
    contactsValidation: [{
            it: 'As a user I should validate if first name is not pass',
            options: {},
            status: 0
        },
        {
            it: 'As a user I should validate if first name is not minimum number',
            options: {
                firstName: 'A'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if first name is greater than maximum number',
            options: {
                firstName: '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is not pass',
            options: {
                firstName: 'User'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is passed incorrectly',
            options: {
                firstName: 'User',
                lastName: ''
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is not minimum number',
            options: {
                firstName: 'User',
                lastName: 'A'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is greater than maximum number',
            options: {
                firstName: 'User',
                lastName: '8776f108e247ab1e2b323042c049c266407c81fbad41bde1e8dfc1bb66fd267e'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if phone number is not pass',
            options: {
                firstName: 'User',
                lastName: 'Last'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if phone number is passed incorrectly',
            options: {
                firstName: 'User',
                lastName: 'Last',
                Phone: ''
            },
            status: 0
        },
        {
            it: 'As a user I should validate if phone number is greater than maximum number',
            options: {
                firstName: 'User',
                lastName: 'Last',
                phoneNumber: '123456789012345'
            },
            status: 0
        }
    ],
    deleteContact: [{
            it: 'As a User I should validate if id is not pass',
            options: {

            },
            status: 0
        },
        {
            it: 'As a User I should validate if id is passed as blank',
            options: {
                id: ''
            },
            status: 0
        },
        {
            it: 'As a User I should validate if id is passed as invalid',
            options: {
                id: 'invalid'
            },
            status: 0
        }
    ],
    editContact: [{
            it: 'As a user I should validate if id is not pass',
            options: {
                firstName: 'Test',
                lastName: 'Last',
                Phone: '9898989898'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if id is pass as blank',
            options: {
                id: '',
                firstName: 'Test',
                lastName: 'Last',
                Phone: '9898989898'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if id is pass as invalid',
            options: {
                id: 'tetet',
                firstName: 'Test',
                lastName: 'Last',
                Phone: '9898989898'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if first name is not pass',
            options: {
                id: '5f083c352a7908662c334532'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if first name is pass but empty',
            options: {
                id: '5f083c352a7908662c334532',
                firstName: ''
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is not pass',
            options: {
                id: '5f083c352a7908662c334532',
                firstName: 'Test'
            },
            status: 0
        },
        {
            it: 'As a user I should validate if last name is pass but empty',
            options: {
                id: '5f083c352a7908662c334532',
                firstName: 'Test',
                lastName: '',
            },
            status: 0
        },
        {
            it: 'As a user I should validate if phone is not pass',
            options: {
                id: '5f083c352a7908662c334532',
                firstName: 'Test',
                lastName: 'Last',
            },
            status: 0
        },
        {
            it: 'As a user I should validate if phone is pass but empty',
            options: {
                id: '5f083c352a7908662c334532',
                firstName: 'Test',
                lastName: 'Last',
                Phone: '',
            },
            status: 0
        }
    ]
};