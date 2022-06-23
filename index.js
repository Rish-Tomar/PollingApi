
/*<-- IMPORTS -->*/

const { Router } = require('express')
const express =require('express')
const db = require('./config/mongoose')
const bodyParser    = require('body-parser')


/*<-- Other's -->*/
const app =express()
const PORT = 8000

//middlwwares

//body parsers

app.use(express.urlencoded({ extended: false}))

app.set('view engine', 'ejs');
app.set('views', './views');

//using routes
app.use('/',require('./routes'))

/*<-- Server listening -->*/

app.listen(PORT, (err)=>{
    if (err){console.log('error while starting server',err)}
    console.log(`Server Running at port ${PORT}`)
})