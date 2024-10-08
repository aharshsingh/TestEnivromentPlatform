const express = require('express');
const router = express.Router();
const {adminAuth, loginController, testController, adminController, questionController, submissionController} = require('../controllers/index')
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');


router.post('/adminRegister', adminAuth.adminRegister);
router.post('/login', loginController.login);
// router.post('/verify', auth, loginController.verify);
router.get('/test', auth, testController.getTest);
router.get('/question/:queID', auth, questionController.getQuestion);
router.post('/uploadTest', auth, admin, adminController.uploadTest);
router.post('/uploadQuestion', auth, admin, adminController.uploadQuestion);
router.patch('/updateTest/:testID', auth, admin, adminController.updateTest);
router.post('/uploadSubmission', auth, submissionController.uploadSubmission);
module.exports = router;

