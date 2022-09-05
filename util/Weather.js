const request = require('postman-request')

 const weather = (address , Callback) => {
 const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + '&units=metric&appid=Enter_Your_Own_ApiKey'
 //HERE BODY IS REQUEST VARIABLE
 request({ url , json:true}, (error, {body}) => {
    if(error )
    {
    Callback('Unable to connect', undefined)
    }
    else if(body.error){
        Callback('Unable to find', undefined)
    }
    else{
 Callback(undefined, {main:body.main,condition:body.main.temp, feellike:body.main.feels_like})
           }
 })
 }

 module.exports = weather