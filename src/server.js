// const express = require('express');
// const bodyParser = require('body-parser');
// const mongo = require('mongoose');

// const db = mongo.connect('mongodb://localhost:27017/adopet', (err, response) => {
//     if (err) console.log(err);
//     else console.log(`connect to ${db}, ${response}`)
// });

// const app = express();
// app.use(bodyParser);
// app.use(bodyParser.json({ limit: '5mb' }));
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     res.setHeader('Acess-Control-Allow-Origin', 'http://localhost:4200');
//     res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Acess-Control-Allow-Headers', 'X-Requested-With, content-type');
//     res.setHeader('Acess-Control-Allow-Credentials', true);

//     next();
// });

// const Schema = mongo.Schema;

// const Animal = new Schema({
//     animalName: { type: String },
//     animalType: { type: String },
//     AnimalColor: { type: String }
// }, { versionKey: false });

// const model = mongo.model('users', Animal, 'users');

// app.post("/api/saveAnimal", (req, res) => {
//     const mod = new model(req.body);
//     if (req.body.mode == "Save") {
//         mod.save((err, data) => {
//             if (err) res.send(err);
//             else res.end({ data: "record saved" });
//         });
//     } else {
//         model.findByIdAndUpdate(req.body.id, {
//             animalName: req.body.animalName,
//             animalType: req.body.animalType,
//             AnimalColor: req.body.AnimalColor
//         }, (err, data) => {
//             if (err) res.send(err);
//             else res.send({ data: "record save" });
//         });
//     }
// });

// app.get("/api/getAnimal", (err, res) => {
//     model.find({}, (err, data) => {
//         if (err) res.send(err);
//         else res.send(data);
//     });
// });

// app.listen(8080, () => console.log("Listening in port 8080!"));

'use strict'

const express = require('express')
const bodyParse = require('body-parser')
const mongo = require('mongodb').MongoClient

const app = express()
const url = 'mongodb://localhost:27017/'

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get('/api/getAnimal', (req, res) => {
    console.log(req.body)
});

app.post('/api/saveAnimal', (req, res) => {
    console.log(req.body)
    const animalObject = {
        name: req.body.animalName,
        type: req.body.animalType,
        color: req.body.animalColor
    }

    mongo.connect(url, (req, db) => {
        const dbo = db.db('adopet')
        dbo.collection('animals').insertOne(register)
        db.close()
    });
});

app.listen(8080, () => console.log("ON 8080!"));