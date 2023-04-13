import express from "express";


import crypto from "node:crypto";

const PORT = 3000;
const address = `http://localhost:${PORT}`;
const app = express();

app.use(express.json());

app.get("/healthz", function (req, res) {
    res.send({status: "OK"});
});
let i = 0;
// const start = Date.now();
app.get("/sync", function (req, res) {
    const start = Date.now();
    i +=1;
    console.log(`Start request ${i}`)
    console.log("start at " + start/1000);
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
    // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

    console.log("Hash: ", Date.now() - start);
    console.log("End at " + Date.now()/1000);
    console.log(`End request ${i} \n`)
    res.send({status: "OK"});
});

app.get("/async", function (req, res) {
    res.send({status: "OK"});
});


app.listen(PORT, () => {
    console.log(`starting app on: ${address}`);
});