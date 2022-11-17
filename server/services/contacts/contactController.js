
const ContactService = require('./contactService');
const Utils = require('../../util/utilFunctions');

/**
 * Class represents controller for user Basic Profile.
 */
class ContactController {

    /**
     * @desc This function is being used to contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} req Request
     * @param {Object} req.body RequestBody
     * @param {function} res Response
     */
    static async getContactDetails (req, res) {
        const data = await ContactService.getContactDetails(req);
        Utils.sendResponse(null, data, res, res.__('SUCCESS'));
    }

    /**
     * @desc This function is being used to save contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} reqObj Request
     * @param {Object} reqObj.body RequestBody
     * @param {Object} reqObj reqObj
     */
    static async saveContact (req, res) {
        try {
            const data = await ContactService.saveContact(req, res.__);
            Utils.sendResponse(null, data, res, MESSAGES.REGISTER_SUCCESS);
        } catch (error) {
            Utils.sendResponse(error, null, res, '');
        }
    }

    /**
     * @desc This function is being used to update contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} reqObj Request
     * @param {Object} reqObj.body RequestBody
     * @param {Object} reqObj reqObj
     */
    static async updateContact (req, res) {
        try {
            const data = await ContactService.updateContact(req, res.__);
            Utils.sendResponse(null, data, res, MESSAGES.UPDATE);
        } catch (error) {
            Utils.sendResponse(error, null, res, '');
        }
    }

    /**
     * @desc This function is being used to delete contact details
     * @author Growexx
     * @since 15/11/2022
     * @param {Object} reqObj Request
     * @param {Object} reqObj.body RequestBody
     * @param {Object} reqObj reqObj
     */
     static async deleteContact (req, res) {
        try {
            const data = await ContactService.deleteContact(req, res.__);
            Utils.sendResponse(null, data, res, res.__('DELETED'));
        } catch (error) {
            Utils.sendResponse(error, null, res, '');
        }
    }
}

module.exports = ContactController;
