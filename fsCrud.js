const fs=require("fs")// import file system module.

////CRUD operation with sync ways.

////Create file:writeFileSync()
// fs.writeFileSync("files/banana.txt","this is the fruit")//Create file with content

////Delete File :unlinkSync()
// fs.unlinkSync("files/banana.txt") //unlink or Delete file.

////Read File:readFileSync()
// let data=fs.readFileSync("files/apple.txt","utf-8")//Read File
// console.log(data)

//// Update/append file :appendFileSync()

// fs.appendFileSync("files/apple.txt"," and this is good for helth")

////CRUD operation with sync ways get input form terminal

const operation=process.argv[2]//returns an array containing the command-line arguments passed when the Node.js process was launched.
  let name=process.argv[3]
 let fullName="files/"+name+".txt"
    let content=process.argv[4]
    
if(operation=="write"){//create file using command-line terminal arg
fs.writeFileSync(fullName,content)
}

else if(operation=="read"){//read file
   let data= fs.readFileSync(fullName,"utf-8")
   console.log(data)

}else if(operation=="update"){ // update file content
 fs.appendFileSync(fullName,content)
  
}else if(operation=="delete"){ //delte file
  fs.unlinkSync(fullName)
   console.log(fullName," file is deleted")

}
