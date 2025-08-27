import express from 'express'
import dotenv from 'dotenv';
import { MongoClient} from 'mongodb'
import bodyParser from 'body-parser';
import cors from 'cors'

// NOTE:- usually the built in middlewares needs to be used with () with their name in app.use, and custome made
// do not need to put () after their name.

dotenv.config();
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = 'Password-Manager'

const app = express();
const PORT = 3000

app.use(cors())

await client.connect(); // connecting client to mongodb

const db = client.db(dbName); //Making database 

//middleware
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

//api to get data(all the passwords)
app.get('/', async (req,res)=>{
    const db = client.db(dbName);
    const collection = db.collection('passwords'); // creates a collection named documents
    const findResult = await collection.find({}).toArray(); // finding all the passwords stored
    res.json(findResult)
})

//api to insert data(Save a password)
app.post('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName)
    const collection = db.collection('passwords'); // refers a collection named documents
    const findResult = await collection.insertOne(password); // inserting the whole document in collection
    res.send({success: true, result: findResult});
})
//api to delete data(Delete a password)
app.delete('/', async (req,res)=>{
    const password = req.body;
    const db = client.db(dbName)
    const collection = db.collection('passwords'); // refers a collection named documents
    const findResult = await collection.deleteOne(password); // deleting the document that match
    res.send({success: true, result: findResult});
})


app.listen(PORT, ()=>{
    console.log(`Example App listening on port ${PORT}`);
})