const http = require("http");
const fs = require("fs");
const { url } = require("inspector");
const express = require("express");

const server = http.createServer((res,req) =>{
if(req.url == "/id")
{  
    fs.readFile(`${__dirname}/express/test.json`,"utf-8",(err ,data)=>{
        console.log(data);
    });  
}

if(req.url == "/name")
{  
    fs.readFile(`${__dirname}/express/test.json`,"utf-8",(err ,data)=>{
        console.log(data);
    });  
}

if(req.url == "/team")
{  
    fs.readFile(`${__dirname}/express/test.json`,"utf-8",(err ,data)=>{
        console.log(data);
    });  
}

if(req.url == "/role")
{  
    fs.readFile(`${__dirname}/express/test.json`,"utf-8",(err ,data)=>{
        console.log(data);
    });  
}

});

server.listen(8000 , "127.0.0.1" , () =>
{
    console.log("hello listing on port no 8000");
})