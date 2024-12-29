const http=require(`http`)

//to create server

const server=http.createServer((req,res)=>{
    // res.write(`Welcome the Home Page`)
    // res.end(`Jai Hind`)

    if(req.url==='/'){
        res.end(`Your are at Home page`)
    }
    else if(req.url==='/about'){
        res.write(`Here is the about section`)
        res.end(`This is info about us`)
    }
    //setting default url which is run when the clent request for the url or resource which is not exist
    else{
        res.end(`
            <h1>OPPS The url request is wrong , Not Exist</h1>
            <a href="/" >Go Back </a>
            `)
    }


})
//specify the port through which server listen the request and send response
server.listen(5000);

// server.listen(5000,()=>{
//     (`server is running at http:localhost:5000`);
// })