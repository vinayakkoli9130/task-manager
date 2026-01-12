let querystring=require('querystring')
function userDataSubmit(req,resp){
    let dataBody=[]
req.on('data',(chunk)=>{
dataBody.push(chunk)
})

req.on('end',()=>{
    let rawData=Buffer.concat(dataBody).toString()
    
    let readableData=querystring.parse(rawData)
  
    let formData=`my name is ${readableData.name} and my email id is ${readableData.email}`
  console.log(formData)
 
})

resp.write("<h1>you can get data from user form</h1>")
}

module.exports=userDataSubmit;