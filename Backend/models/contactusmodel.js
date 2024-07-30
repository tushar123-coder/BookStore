import mongoose from 'mongoose'

const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    text:{
        type:String,
        required:true
    },
})

const contactinfo=mongoose.model("contactus",contactSchema);
export default contactinfo;