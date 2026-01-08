 //Moduler Way
// export let userName="Vinayak Koli"

//commonjs:beginner and node default
//“module.exports is an object provided by node.js commonjs module
// used to export values from a Node.js module.”
module.exports={
    userName:"Vinayak Koli",
cityName:"Pune",
age:26
}

//if we have two or more object 

let empInfo={
    empName:"Mahesh Koli",
    empId:"vinny25",
    empSalary:38000
}
let empAdd={
    currCity:"Pune",
    empDist:"Solapur",
    empTaluka:"Mangalwedha",
    villaige:"Nandur"
}

function add(a,b){
    return a+b
    // console.log(a+b)
}

module.exports={
    empInfo,
    empAdd,
    add
}