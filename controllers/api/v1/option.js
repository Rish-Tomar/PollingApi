const Question =require('../../../models/question')
const { options } = require('../../../routes')

module.exports.addVote = async (req,res)=>{

    console.log("option id is",req.params)
    //fetch the question
    const qstn =await Question.findOne({id:req.params.qid})
    if(qstn){
        //fetch matching option object from array as we require previous vote count
        const result=qstn.options.find((elem)=>{
            // console.log('elem id',elem.id,req.params.optnid)
            return elem.id==req.params.optnid
        })
        result.votes=result.votes+1

        //increasing the required options votes using update method
        await Question.findOneAndUpdate({id:req.params.qid,"options.id":parseInt(req.params.optnid,10)},{$set:{"options.$.votes":result.votes}})
        const finall =await Question.findOne({id:req.params.qid})

        return res.status(200).json({
         message:'Your vote added',
            option: result
        })
    }
    
    
}

module.exports.deleteOption =async (req,res) =>{
    console.log(" from delete option option id is",req.params)
    //fetch the question
    const qstn =await Question.findOne({id:req.params.qid})
    if(qstn){
        const result=qstn.options.find((elem)=>{
            return elem.id==req.params.optnid
        })
        if(result){
            await Question.findOneAndUpdate({id:req.params.qid},{$pull:{options:{id:parseInt(req.params.optnid)}}})
            return res.status(200).json({
                message:'Option deleted'
            })
        }
        return res.status(200).json({
            message:'option not found'
        })
    }
    return res.status(200).json({
        message:'Question doesnot exist with provide id'
    })
}
