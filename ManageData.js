const fs = require("fs")


// *******************************************Load data JSON and convert to opject**************************************

const loadInfo = () => {

  try{

      const dataJson = fs.readFileSync("EmployeesData.json").toString()
      return  JSON.parse(dataJson)

    }
    catch {
        return []
    }
   
}


// *******************************************Save employee data in the data file******************************************

const savedata = (allData) => {

  const saveallDataJson  = JSON.stringify(allData)
  fs.writeFileSync("EmployeesData.json" , saveallDataJson)

}

// ***************************************Add Employee********************************************************************************

const addEmployee = (id , fname , lname , city , age) => {

    const allData = loadInfo()

    const duplicatedData = allData.filter((obj) =>{
      return  obj.id === id 
    })

    if (duplicatedData.length == 0  ){

        allData.push({
          id : id,
          fname : fname,
          lname : lname,
          city : city,
          age : age
        })
        savedata(allData)

        console.log("Employess added)")

  } else 
  {
    console.log("Employee already exists!")
  }
}


// ***************************************************Read All Emolpyee data********************************************************************


const readEmolpyeeData = (id) => {

  const allData = loadInfo()

  const itemNeeded = allData.find((obj) => {
     return  obj.id == id 
  })

 
  if (itemNeeded) {

    console.log(itemNeeded)

  }
  else 
  {
    console.log("The employee doesn't exist, please add him/her")

  }
}

// ***********************************************Read specific All Emplyees data********************************************************************


const ReadSpecificEmplyeesData = () => {

  const  allData = loadInfo()

   allData.forEach((obj) => {

    if(obj.city){


      console.log(obj.fname , obj.lname , obj.city)
    }
    else 
    
   {
    console.log(obj.fname , obj.lname)

    }


   })

}

// ***********************************************Delete Employee***********************************************************************************

const deleteEmoloyee  = (id) =>{

    const allData = loadInfo()

    let index = allData.findIndex((obj) => obj.id === id);

    if (index >= 0){

      const dataTokeep = allData.filter((obj) => {
        return obj.id !== id
    })

    savedata(dataTokeep)

    console.log("Employess deleted")

    }

    else{

      console.log("Employee doesn't exist")

    }
  
}





module.exports = {
  addEmployee,
  readEmolpyeeData,
  ReadSpecificEmplyeesData,
  deleteEmoloyee,

}