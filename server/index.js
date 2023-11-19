const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors(

));

app.use(express.json({limit: '200mb', extended: true}))
app.use(express.urlencoded({limit: '200mb', extended: true}))

const _Port = "3001"



//CONNECT TO MY DB
const username = "alexdbreact",
      password = process.env.PASSWORD,
      database = "Alexandria";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.oiijcet.mongodb.net/${database}?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
      ).catch(err => console.log(err.reason)); 


// IMPORT USER MODEL

const UserModel = require("./models/Users")

app.get("/users",async (req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})

//create user
app.post("/createUser", async (req, res)=>{

    const user = req.body;
    const newUser = new UserModel(req.body);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    await newUser.save();
    res.json(req.body)
})

app.get("/",(req, res)=>{
    res.send("<h1>Hello in Orsod App for Alexandria<h1>")
})
 // start server on port

app.listen( _Port , ()=>{
    console.log("server work")
})
