const Question =require('../../../models/question')
const Option =require('../../../models/options')

module.exports.seeAllQuestions =(req,res)=>{

}

module.exports.viewQuestion =async (req,res)=>{
    console.log('Question id', req.params.id)
    const ques = await Question.findOne({id:parseInt(req.params.id,10)})

    if(ques){
        return res.status(200).json({
            message:'Question Found successfully',
            question:ques
        })
    }
    return res.status(404).json({
        message:'Question not found!! , try changing question id'
    })
    
}

module.exports.createQuestion= async (req,res)=>{

    try{
        console.log('enttered into create usetion')
        const count=await Question.countDocuments();
        console.log('count of documents', count)
        console.log('req.body',req.body)

        //create the question
        const exist = await Question.findOne({id:count+1})
        if(exist){
            count=count+1
        }
        const ques=await Question.create({
            id:count+1,
            title:req.body.title
        })

        if(ques){
            return res.status(200).json({
                message:"Question has been created",
                back:req.body.title
            })
        }
        return res.status(200).json({
                message:"cannot create Question",
            })
    
        
    }catch(err){
        return res.status(500).json({
            message:"error occured"
        })
    }

}

module.exports.createOptions= async (req,res)=>{
    console.log('requset parameters',req.params)
    const ques=await Question.findOne({id:req.params.id});
    var pushOption={}
    //find options if any 
    if(ques){
        const optionCount =ques.options.length
        console.log('length of option',optionCount,req.body);
        if(req.body.text){
            // now prepare for the option to be pushed to question
            pushOption= {
                id:optionCount+1,
                text:req.body.text,
                votes:0,
                link_to_vote:`http://localhost:8000/api/v1/question/${ques.id}/options/${optionCount+1}/add_vote`
            }
            ques.options.push(pushOption)
            ques.save()
            return res.status(200).json({
                message:'hellow done',
                push:pushOption
                })
        }
        return res.status(200).json({
            error_message:"Please enter your option using key name as 'text' then pass the request",
        })   
    }
    console.log(ques)
    return res.status(500).json({
        message:'error !! question not found',
    })
       
}

module.exports.deleteQuestion =async (req,res)=>{
    console.log('queston to be deleted',req.params)
    const data =await Question.findOne({id:req.params.id})
    //find the question and delete
    if(data){
        Question.findOneAndDelete({id:req.params.id},(err,data)=>{
            if(err){
                console.log('error while deleting')
                return res.status(200).json({
                    message:'error while deleting Question'
                })
            }
            console.log(data)
            return res.status(200).json({
                message:'Question deleted'
            })    
        })
    }
    else{
        return res.status(200).json({
            message:'No such Question found'
        })
    }
    
}

