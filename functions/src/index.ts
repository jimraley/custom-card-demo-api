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
// exports.main = functions.https.onRequest(app);
export const acquire = functions.https.onRequest(app);
 