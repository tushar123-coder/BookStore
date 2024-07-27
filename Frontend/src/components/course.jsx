import React, { useEffect, useState } from 'react'
import Card from "./cards"
import axios from 'axios'
import {Link} from 'react-router-dom' 
function course() {

const [book,setbook]=useState([]);
useEffect(()=>{
  const getBook=async ()=>{
   try {
    const res= await axios.get("http://localhost:4001/book");
    console.log(res.data);
    setbook(res.data);
   } catch (error) {
    console.log(error);
   }
  }
  getBook();
},[])

  return (
 <>
<div className='max-w-screen-2xl py-2 container mx-auto md:px-20 px-4'>
  <div className='mt-28 items-center justify-center text-center'>
   <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
     <span className='text-pink-500'>Here! :)</span>
     </h1>
     <p className='mt-12'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut ratione delectus, velit vero nulla ipsum consequatur minus perspiciatis ea aperiam commodi tenetur quos rerum, accusamus voluptas veritatis similique voluptatum!
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, et! Id itaque inventore cum tempore deleniti fugiat quos dolore eaque omnis adipisci, eveniet unde earum officiis fuga quia tempora nihil.
     </p>

<Link to='/'>
<button className='bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
</Link>
  </div>

  <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
      book.map((item)=>
      (
        <Card key={item.id} item={item}/>
      ))
    }
  </div>
</div>
</>
  )
}

export default course
