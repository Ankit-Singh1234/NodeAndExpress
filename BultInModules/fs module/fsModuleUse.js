// file using Synchronous reasd and write Approach

const { readFileSync ,writeFileSync} = require("fs")


//Escaping Backslashes: In Windows file paths, backslashes need to be escaped using double backslashes (\\).

const first = readFileSync('BultInModules\\path module\\content\\subcontent\\first.txt', 'utf8');   //(filepath,encoding)
const second = readFileSync('BultInModules\\path module\\content\\subcontent\\second.txt', 'utf8');


console.log(`content of both is ${first+second}`)


writeFileSync(
    `BultInModules\\path module\\content\\subcontent\\result.txt`,//if file not exist it create.if{flag:`a`} not used then it overwite
    `Here is the combined code: ${first+second} .. done`,  //the data to be written in the file
    {flag:`a`}  //append

)


