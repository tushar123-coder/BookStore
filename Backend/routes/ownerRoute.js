import express from 'express'
import {contactUs} from '../controler/contactControler.js'
import contactModel from '../models/contactusmodel.js'
const router=express.Router();
router.get('/admin',(req,res)=>
    {
        
        res.render("createproducts");
    })

router.post('/contactus',contactUs);

router.get('/queries', async (req,res)=>
{
  const contacts= await contactModel.find();
  res.render("queries",{contacts})
})

router.get('/delete/:id', async (req,res)=>
{
    const query= await contactModel.findOneAndDelete({_id:req.params.id})
    res.redirect('/owner/queries')
})
    export default router;