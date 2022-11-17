const validation = require('../../util/validation');
const GeneralError = require('../../util/GeneralError');

/**
 * Class represents validations for user Basic Profile.
 */
class ContactValidator extends validation {
    constructor(body, locale) {
        super(locale);
        this.body = body;
    }

    /**
     * @desc This function is being used to validate request for contact
     * @author Growexx
     * @since 15/11/2022
     */
    validationAddContact () {
        const { firstName, lastName, Phone } = this.body;
        this.firstName(firstName, 'First Name');
        this.lastName(lastName, 'Last Name');
        super.Phone(Phone, 'Phone');
    }

    /**
     * @desc This function is being used to validate first name
     * @since 15/11/2022
     * @param {String} firstName firstName
     */
    firstName(firstName, field) {
        if (!firstName) {
            throw new GeneralError(this.__(this.REQUIRED, field), 400);
        }

        if (firstName.toString().length <= 0) {
            throw new GeneralError(this.__(this.INVALID, field), 400);
        }
    }

    /**
     * @desc This function is being used to validate last name
     * @since 15/11/2022
     * @param {String} lastName lastName
     */
    lastName(lastName, field) {
        if (!lastName) {
            throw new GeneralError(this.__(this.REQUIRED, field), 400);
        }

        if (lastName.toString().length <= 0) {
            throw new GeneralError(this.__(this.INVALID, field), 400);
        }
    }

    /**
     * @desc This function is being used to validate id of contact
     * @author Growexx
     * @since 16/11/2022
     */
     validationDeleteContact () {
        super.checkMongoId(this.body.id, 'Contact Id');
    }
}

module.exports = ContactValidator;