const express= require('express')
const questionController =require('../../../controllers/api/v1/questions')
const optionController =require('../../../controllers/api/v1/option')
const Router= express.Router();

// for Questions
   //get request 
       Router.get('/',questionController.showQuestion)
       Router.get('/:id',questionController.viewQuestion)
       Router.get('/:id/delete',questionController.deleteQuestion)
   //post requests
       Router.post('/create',questionController.createQuestion)
       Router.post('/:id/options/create',questionController.createOptions)


//for options
Router.get('/:qid/options/:optnid/add_vote',optionController.addVote)
Router.get('/:qid/options/:optnid/delete',optionController.deleteOption)




module.exports = Router