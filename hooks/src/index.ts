import express from 'express';

const app = express();

//
//password logic to only authorised 
app.post('/hooks/catch/:userId/:zapId' ,(req,res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    //store in db new trigger

    //push it on to a queue kafka/redis
    



})