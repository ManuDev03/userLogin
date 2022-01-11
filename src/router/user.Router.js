const express = require('express')
const router = express.Router()
const userController = require('../controller/user.Controller');


router.route('/login')
    .post(userController.loginUser)
    .get(userController.loginUser);

// router.route('/register')
//     .post(userController.registerUser)
//     .get(userController.registerUser);

router.get('/register',userController.registerUser);
router.post('/register',userController.registerUser);



router.route('/home')
    .get(userController.homePage)

router.route('/users')
    .get(userController.getUsers)

module.exports = router


