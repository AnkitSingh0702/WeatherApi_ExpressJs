
const express = require('express')
const app = express()

const hbs = require('hbs')
const weather = require('../util/Weather')
const path = require('path')
const public = path.join(__dirname, '../public')
app.use(express.static(public))
app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname, '../views')
app.set('views',viewsPath)


//Index are hbs(handler) page 
app.get('', (req , res) => {
  res.render('index', {
    title: 'Weather',
    description: 'Real Time weather update '
  })
})


app.get('/weather' , (req,res) => {
  if(!req.query.adress){
    return res.send({
      erroe:'Error is there'
    })
  }
 weather(req.query.adress, (error, data) => {
 if (error){
  return res.send(error)
 }

 res.send(data)
  })

})

// * it represent which is not present
app.get('*' , (req, res) => {
  res.render('erroe', {
    title:'404',
    errormessage: 'Page not found'
  })
})


app.listen(4000, () => {
  console.log('server is working');
})


