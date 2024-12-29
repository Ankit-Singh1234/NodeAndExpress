function sayHi(name){

   //  X dont use this it simplly print waht is in double quoten same as it 
   //console.log("Hi ${name} Bro How's the Josh");   it wrong 

   //Template literals use backticks (`), not double quotes ("), and the variable should be enclosed in ${} inside the backticks.
   console.log(`Hi ${name} Bro How's the Josh`)  


}

module.exports=sayHi;