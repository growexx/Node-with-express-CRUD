const mongoose = require('mongoose');
const GeneralError = require('../util/GeneralError');
const REQUIRED = 'FIELD_REQUIRED';
const INVALID = 'FIELD_NOT_VALID';

/**
 * Created by Growexx on 15/11/2022
 * @name Validator
 */
class Validator {
    constructor(locale) {
        this.NOT_VALID = INVALID;
        this.REQUIRED = REQUIRED;

        if (locale) {
            this.__ = locale;
        }
    }

    /**
     * @desc This function is being used to validate phone
     * @author Growexx
     * @since 16/11/2022
     * @param {string} Phone Phone
     */
    Phone(Phone) {
        if (!Phone) {
            throw new GeneralError(this.__(REQUIRED, 'Phone'), 400);
        }

        if (!CONSTANTS.REGEX.PHONE.test(Phone)) {
            throw new GeneralError(this.__(INVALID, 'Phone'), 400);
        }
    }

    /**
     * @desc This function is being used to validate mongo id
     * @author Growexx
     * @param {string} id id
     * @since 16/11/2022
     */
    checkValidMongoId(id, field = 'Id') {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new GeneralError(this.__(INVALID, field), 400);
        }
    }

    /**
     * @desc This function is being used to validate id is not blank
     * @author Growexx
     * @param {string} id id
     * @since 16/11/2022
     */
    checkMongoId(id, field = 'Id') {
        if (!id) {
            throw new GeneralError(this.__(REQUIRED, field), 400);
        }

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new GeneralError(this.__(INVALID, field), 400);
        }
    }
}

module.exports = Validator;