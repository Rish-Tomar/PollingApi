const express= require('express')

const Router= express.Router();

// const testController =require('../controllers/api/v1/test_controller')
const homePageController =require('../controllers/homePageController')

//use api routes

// Router.get('/',testController.check)
Router.get('/',homePageController.home)
Router.use('/api',require('./api'))


module.exports = Router