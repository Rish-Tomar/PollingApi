const express= require('express')
// const testController =require('../../../controllers/api/v1/test_controller')

const Router= express.Router();


// Router.get('/',testController.check)


Router.use('/questions',require('./questions'))

module.exports = Router