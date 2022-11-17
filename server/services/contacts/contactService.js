const mongoose = require('mongoose');
const Contact = require('../../models/contact.model');
const ContactValidator = require('./contactValidator');
const GeneralError = require('../../util/GeneralError');

/**
 * Class represents services for Contact.
 */
class ContactService {

    /**
     * @desc This function is being used to contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} res Response
     * @param {function} next exceptionHandler
     */
    static async getContactDetails (req) {
        const options = {
            select: { firstName: 1, lastName: 1, Phone: 1},
            page: (req.query.page) ? req.query.page : 1,
            limit: (req.query.limit) ? req.query.limit : 10,
            sort: { name: (req.query.sort) ? req.query.sort : 1 }
        };

        return await Contact.paginate({}, options);
    }

    /**
     * @desc This function is being used to save contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} locale Locale passed from request
     * @param {Object} res Response
     */
    static async saveContact(req, locale) {
        const Validator = new ContactValidator(req.body, locale);
        Validator.validationAddContact();

        const checkPhone = await Contact.findOne({
            $or: [{
                Phone: req.body.Phone
            }]
        }, {
            _id: 1,
            firstName: 1,
            lastName: 1,
            Phone: 1
        });

        if (checkPhone && checkPhone.id) {
            if (checkPhone.Phone === req.body.Phone) {
                throw new GeneralError(locale('PHONE_EXISTS'), 400);
            }
        }
        return await Contact.create(req.body);
    }

    /**
     * @desc This function is being used to update contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} locale Locale passed from request
     * @param {Object} res Response
     */
    static async updateContact(req, locale) {
        const {
            id,
            firstName,
            lastName,
            Phone
        } = req.body;
        const Validator = new ContactValidator(req.body, locale);
        Validator.checkValidMongoId(id, 'Id');
        Validator.validationAddContact();
        return await Contact.findByIdAndUpdate(
            req.body.id, {
                "firstName": firstName,
                "lastName": lastName,
                "Phone": Phone,
            }, {
                new: true
            }
        );
    }

    /**
     * @desc This function is being used to delete contact details
     * @author Growexx
     * @since 01/03/2021
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {Object} locale Locale passed from request
     * @param {Object} res Response
     */
    static async deleteContact (req, locale) {
        const Validator = new ContactValidator(req.body, locale);
        Validator.checkMongoId(req.body.id, 'Id');
        Validator.validationDeleteContact
        await Contact.findByIdAndRemove(req.body.id);
    }
}

module.exports = ContactService;