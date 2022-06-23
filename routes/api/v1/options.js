const express= require('express')
const optionController =require('../../../controllers/api/v1/option')

const Router= express.Router();


Router.post('/create',optionController.createOptions)
Router.use('/:optnid/add_vote',optionController.addVote)

module.exports = Router