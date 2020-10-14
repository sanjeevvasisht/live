var express = require('express');
var app = express();
var port = process.env.PORT||8900;
var bodParser = require('body-parser');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient
var mongourl = "mongodb+srv://san_91:san123@cluster0.3fqdi.mongodb.net/edureka?retryWrites=true&w=majority";
var cors = require('cors');
var db;

app.use(cors());

app.use(bodParser.urlencoded({extended:true}));
app.use(bodParser.json())

app.get('/health',(req,res) => {
    res.send("Api is working")
});


app.get('/location',(req,res) => {
    db.collection('city').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.get('/mealtype',(req,res) => {
    db.collection('mealtype').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/restaurent',(req,res) => {
    db.collection('restaurent').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.get('/cuisine',(req,res) => {
    db.collection('cuisine').find({}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


MongoClient.connect(mongourl,(err,connection) => {
    if(err) throw err;
    db = connection.db('edureka');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`)
    })
})
