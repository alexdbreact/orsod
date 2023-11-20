const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors(
{
   origin: ["https://orsod.vercel.app","http://localhost:5173"], // restrict calls to those this address
    methods: ["GET","POST"] ,
    credentials: true,
  }
));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", ["https://orsod.vercel.app","http://localhost:5173"]); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(express.json({limit: '200mb', extended: true}))
app.use(express.urlencoded({limit: '200mb', extended: true}))

const _Port = "3001"



//CONNECT TO MY DB
const username = "alexdbreact",
      password = process.env.PASSWORD,
      database = "Alexandria";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:orsod@cluster0.oiijcet.mongodb.net/${database}?retryWrites=true&w=majority`
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
