 

    const fs = require("fs")

   const  yargs = require("yargs")


   const DataManager = require("./ManageData")

   const { type } = require("os")

    yargs.command({
       command : "add" ,
       describe : " to add an emplyee",
       builder : {
         fname : {
            describe :"this is the first name desc in add command",
            demandOption : true ,
            type : "string"
         },
         lname : {
            describe :"this is the last name desc in add command",
            demandOption : true ,
            type : "string"
         }
       },
       handler :(x)=> {
        
         DataManager.addEmployee(x.id , x.fname , x.lname , x.city , x.age)

       }
   })




   yargs.command ({
      command : "read",
      describe : "to read all emolpyee data",
      builder : {
         id : {
            describe : "this is id desc in read command ",
            demandOption : true,
            type: "string"
         }
      },
      handler: (x) => {
         DataManager.readEmolpyeeData(x.id)
      }

   })



   yargs.command ({
      command : "list",
      describe : "read specific all emplyees data",
      handler : () =>{
         DataManager.ReadSpecificEmplyeesData()
      }
   })


   
   yargs.command({
      command : "delete",
      describe: "to delete employee",
      handler : (x)=> {
         
         DataManager.deleteEmoloyee(x.id)
      }
   })

yargs.parse()




