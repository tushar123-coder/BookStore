import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import bookRoute from './routes/bookRoute.js'
import userRoute from "./routes/userRoute.js"

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const port=process.env.PORT||4000;
const URI=process.env.MongoDBURI;
// connecting to database
try {
    mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
});
console.log("Connected to mongodb");
} catch (error) {
    console.log("Error",error);
}

// definig routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.listen(port,()=>
{
    console.log(`Server serve at ${port}`);
})
