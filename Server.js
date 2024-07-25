const express=require("express")
const path = require("path");
    const port=3040;
    const app=express(); 
    // Serve static files from the 'Public' folder 
    app.use(express.static(path.join(__dirname, 'Public')));
    
    // Define a endpoint for adding two numbers 
    const addTwoNumber = (n1, n2) => n1 + n2;
    const subtractTwoNumber = (n1, n2) => n1 - n2;
    const multiplyTwoNumber = (n1, n2) => n1 * n2;

    app.get("/addTwoNumber",(req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2= parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
        //Set "StatusCode=200" is successful request
        res.json({ statusCode:200,data:result });
    });
    app.get("/subtractTwoNumber",(req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2= parseInt(req.query.n2);
        const result = subtractTwoNumber(n1,n2);
        res.json({ statusCode:200,data:result });
    });
    app.get("/multiplyTwoNumber",(req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2= parseInt(req.query.n2);
        const result = multiplyTwoNumber(n1,n2);
        res.json({ statusCode:200,data:result });
    });
    // app.get("/",(req,res)=>{
    //     const n1 ="<html><body><H1>HELLO THERE </H1></body></html>";
    //     res.set('content-Type','text/html');
    //     res.send(Buffer.from(n1));
    // })
    // console.log(addTwoNumber(19,12));

    // Define a root endpoint to serve the "Pubilc" HTML page
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, 'Public', 'index.html'));
    });

    app.listen(port,()=>{
        console.log("hello i'm listening to port "+port);
    })