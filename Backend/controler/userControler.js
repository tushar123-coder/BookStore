import usermodel from '../models/user-model.js'
import bcrypt from 'bcrypt'
export const signup=async (req,res)=>
{
    try {
        const {name,email,password}=req.body
        const user= await usermodel.findOne({email});
        if(user)
        {
            return res.status(400).json({message:"User already exist"});
        }

     bcrypt.genSalt(10,(err,salt)=>
    {   
        if (err) {
            console.error('Error generating salt:', err);
            return res.status(501).json({ error: 'Failed to create user' });
          }

        bcrypt.hash(password,salt, async (err,hash)=>
        {
            if (err) {
                console.error('Error generating salt:', err);
                return res.status(500).json({ error: 'Failed to create user' });
              }
            const createdUser= new usermodel({
                name,
                email,
                password:hash
            })
           await createdUser.save();
            res.status(201).json({message:"User created successfuly",user:{
                _id:createdUser._id,
                name:createdUser.name,
                email:createdUser.email
            }})
        })
    })       

    } catch (error) {
        console.log("Error"+error.message);
        res.status(200).json({message:"Internal server error"});
    }
};

export const login=async (req,res)=>
{
    try {
        const {email,password}=req.body;
        const user=await usermodel.findOne({email});
        const ismatch= await bcrypt.compare(password,user.password);
        if(!user||!ismatch)
        {
            return res.status(400).json({message:"Invalid username and password"});
        }
        else
        {
            return res.status(200).json({message:"Login successfully",user:{
              _id:user._id,
              name:user.name,
              email:user.email
            }});
        }   
    } catch (error) {
        res.status(201).json({message:"Internal server error"})
    }
}