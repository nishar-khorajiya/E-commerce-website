const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const loginschema=new Schema({
    unam:{
        type:String,
        required:true
    },

    passw:{
        type:String,
        required:true
    },
})
//module.exports=mongoose.model('Resisteruser',userschema);
module.exports=mongoose.model('Loginuser',loginschema);