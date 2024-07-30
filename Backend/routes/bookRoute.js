import express from 'express'
import multerconfig from '../config/multer-config.js'
import { getBook,postBook } from '../controler/bookcontroler.js';

const upload=multerconfig;
const router=express.Router();
router.get("/",getBook);

router.post('/create',upload.single('image'),postBook);
export default router;