 //Moduler Way
// export let userName="Vinayak Koli"

//commonjs:beginner and node default

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

module.exports={
    empInfo,
    empAdd
}