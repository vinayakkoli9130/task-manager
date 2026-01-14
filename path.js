//path module: In Node.js, the path module is a built-in core module that provides
//utilities for working with file and directory paths.

const path=require('path')//import built in core module "path"

const file="text/mahesh.txt"

//Return the extension of the path, from the last '.' to end of string in the last portion of the path
//for validation
console.log(path.extname(file))//Output:.txt

//Return the directory name of a path. Similar to the Unix dirname command.
console.log(path.dirname(file))//Output:text

//Return the last portion of a path.
console.log(path.basename(file))//Output:mahesh.txt

//A sequence of paths or path segments.
console.log(path.resolve('text','mahesh.txt'))//Output:D:\Angular\Nodejs\task-manager\text\mahesh.txt

//or

let dirname=path.dirname(file)//directory name:text

let basename=path.basename(file)//base name:mahesh.txt

console.log(path.resolve(dirname,basename))

//Determines whether {path} is an absolute path. An absolute path will always resolve
//to the same location, regardless of the working directory.
//path to test.
console.log(path.isAbsolute(file))//Output:false beacuse this is not full path 

//The directory name of the current module.
// This is the same as the path.dirname() of the __filename
//directory
console.log(__dirname)//Output:D:\Angular\Nodejs\task-manager

//The file name of the current module. 
//This is the current module file's absolute path with symlinks resolved.
////directory with file name
console.log(__filename)//Output:D:\Angular\Nodejs\task-manager\path.js
