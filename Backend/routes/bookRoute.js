import express from 'express'
import { getBook } from '../controler/bookcontroler.js';

const router=express.Router();
router.get("/",getBook);

export default router;