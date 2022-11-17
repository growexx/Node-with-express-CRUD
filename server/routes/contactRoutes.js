const router = require('express').Router();
const ContactController = require('../services/contacts/contactController');

router.get('/', ContactController.getContactDetails);
router.post('/add', ContactController.saveContact);
router.put('/edit', ContactController.updateContact);
router.delete('/delete', ContactController.deleteContact);

module.exports = router;
