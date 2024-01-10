// const a = {
//     average:(a,b)=>{
//          console.log((a+b)/2);
//     },
//     percent:(a,b)=>{
//         console.log((a*b)/100);
//    },
// };

// module.exports = a;

/* file name : print.js
const a = require("./index");

a.percent(10,20);
*/


/*read file function

const fs = require("fs");

console.log(fs);


fs.readFile("./mohit.txt","utf-8",(error,data)=>{
    if(error)throw error;
    console.log(data);
});

console.log(" hi mohit");

// o/p :  hi mohit
// hi my name is mohit kundnani and im from raipur chhattisgarh currenty pursing a btech from netaji subhsh engineering college in electronic and communication engineering and i have command in web development 

*/

/* read function with syncronise
const fs = require("fs");
const file = fs.readFileSync("./mohit.txt","utf-8"); // this is file first hold the file untill read then print

console.log(file);
console.log("hi mohit");
 

// o/p: hi my name is mohit kundnani and im from raipur chhattisgarh currenty pursing a btech from netaji subhsh engineering college in electronic and communication engineering and i have command in web development 
// hi mohit
*/

// const fs = require("fs");
// const a = "hi im mohit kundnani hello";
// // fs.writeFileSync("./rk.txt",a); //write file function with synchronise
// fs.writeFile("./rk.txt",a,()=>{ //write file function 
//     console.log("write in rk.txt");
// });

/*
const os = require("os");
console.log(os.hostname()); // o/p: MohitKundnai.local
console.log(os.freemem()); // o/p: 69091328
console.log(os.totalmem()); // o/p: 8589934592
console.log(os.machine()); // o/p:  arm64
console.log(os.platform()); // o/p: darwin
console.log(os.version()); // o/p: Darwin Kernel Version 23.1.0: Mon Oct  9 21:28:12 PDT 2023; root:xnu-10002.41.9~6/RELEASE_ARM64_T8103
console.log(os.userInfo()); /*{
    uid: 501,
    gid: 20,
    username: 'ezybuysellstore',
    homedir: '/Users/ezybuysellstore',
    shell: '/bin/zsh'
  }*/
const fs = require("fs");
const port = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");
const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end(home);
    }
    else if(req.url === "/about"){
        return res.end("about page");
    }
    else if(req.url === "/contact"){
        return res.end("contact page");
    }
    else if(req.url === "/service"){
        return res.end("service page");
    }
    else {
        return res.end("Error 404 Found");
    }
});

server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`);
});
