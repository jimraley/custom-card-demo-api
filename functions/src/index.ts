import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typ                            
const express = require("express");    
const bodyParser = require('body-parser');     
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs");

app.get("/custom-card", (req:any,res:any, next:any) => {
    const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    res.render('card-template', {params: query});
});
app.get("/custom-card/airline", (req:any,res:any, next:any) => {
    const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    res.render('airline-template', {params: query});
});
app.get("/custom-card/automotive", (req:any,res:any, next:any) => {
    const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    res.render('automotive-template', {params: query});
});
app.get("/custom-card/retail", (req:any,res:any, next:any) => {
    const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    res.render('retail-template', {params: query});
});
app.get("/custom-card/finance", (req:any,res:any, next:any) => {
    const query = JSON.parse(decodeURIComponent(JSON.stringify(req.query)));
    res.render('finance-template', {params: query});
});
// exports.main = functions.https.onRequest(app);
export const acquire = functions.https.onRequest(app);