import contactModel from "../models/contactusmodel.js"
export const contactUs=async (req,res)=>
    {
        try {
            const {name,email,text}=req.body
        
                const createdcontactor= new contactModel({
                    name,
                    email,
                    text
                })
               await createdcontactor.save();
                res.status(201).json({message:"User created successfuly",user:{
                    _id:createdcontactor._id,
                    name:createdcontactor.name,
                    email:createdcontactor.email
                }})
            } catch (error) {
            console.log("Error"+error.message);
            res.status(200).json({message:"Internal server error"});
        }
    };