const {readFile,writeFile}=require(`fs`)

readFile('BultInModules\\path module\\content\\subcontent\\first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;

    }
    const first=result; // firstFile content will store in it

    readFile('BultInModules\\path module\\content\\subcontent\\second.txt', 'utf8',(err,result)=>{
        if(err){
            console.log(err)
            return;
        }

        const second=result;

        //now Write the both thr content in a output file 
        writeFile(
            'BultInModules\\path module\\content\\subcontent\\AsyncOutputFile.txt', 
            `This is the Async data : ${first+second} : both the files`,
            (err,result)=>{
            if(err){
                console.log();
                return;
            }

            console.log(result)

        })
    })
})