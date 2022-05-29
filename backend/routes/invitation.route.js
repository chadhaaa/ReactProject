const router = require('express').Router();

const {
    createInvitationToken,
    acceptInvitationRequest,
} = require('../controllers/invitation.controller');

router.post('/create', createInvitationToken);
router.get('/accept/:token', acceptInvitationRequest);

module.exports = router;