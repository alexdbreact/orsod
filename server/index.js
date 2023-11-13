const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors(

       origin: ["https://orsod.vercel.app/"],
        methods: ["POST","GET"],
        credentials: true
));
app.use(express.json({limit: '200mb', extended: true}))
const _Port = "3001"



//CONNECT TO MY DB
const username = "alexdbreact",
      password = process.env.PASSWORD,
      database = "Alexandria";

const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.oiijcet.mongodb.net/${database}?retryWrites=true&w=majority`); 


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
    res.send("<h1>kkjll<h1>")
})
 // start server on port

app.listen( _Port , ()=>{
    console.log("server work")
})
