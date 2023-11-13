const {Schema , model} = require("mongoose");

const UserSchema = new Schema({
    place :{
        type: String,
    },
    sort :{
        type: String,
    },
    image :{
        type: String,
        
    },
    mylang :{
        type: String,

    },
    mylat :{
        type: String,

    },
    mygeo :{
        type: String,

    },
   
    flag :{
        type: String,

    },
    mob :{
        type: Number,

    },

})


const UserModel =  model("users", UserSchema)


module.exports = UserModel 