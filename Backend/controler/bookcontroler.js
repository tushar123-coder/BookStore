
import Book from '../models/book-model.js'
export const getBook = async (req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book)
    } catch (error) {

        console.log("Error", error);
        res.status(500).json(error);
    }
}


export const postBook= async (req,res)=>
{
    try{
        let{name,price,title,category}=req.body;

        const base64Image = req.file.buffer.toString('base64');
        const imageUrl = `data:${req.file.mimetype};base64,${base64Image}`;
        let product= await Book.create({
            image:imageUrl,
            name,
            price,
            title,
            category
            });
            await product.save();
            res.redirect("/owner/admin");
          } catch(err)
            {
                res.send(err.message)
            }
}