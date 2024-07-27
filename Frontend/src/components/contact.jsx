import React from 'react'

function contact() {
  return (
   <>
  <div className='flex h-screen items-center justify-center'>
     <div className="">
        {/* Start */}
  <div className="">
    <form method="dialog">
   
    <h3 className="font-bold text-3xl">Contact Us</h3>
      {/* Name */}
      <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
     <input type="text" placeholder='Enter your name' className='w-96 px-3 dark:bg-slate-900 py-1 border rounded-md outline-none'
     />
     <br/>

     </div>
     {/*Email */}
     <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
     <input type="email" placeholder='Enter address' className='w-96 px-3 py-1  dark:bg-slate-900 border rounded-md outline-none'/>
     </div>

      {/*Password*/}
     <div className='mt-4 space-y-2'>
     <span>Meassge</span>
     <br/>
     <textarea type="password" placeholder='Type your message'  className='w-96  dark:bg-slate-900 h-28 px-3 py-1 border rounded-md outline-none '/>
     <br/>

     </div>
       {/*Button */}
      <div className=' mt-6'>
        <button className='bg-blue-500 rounded-md px-4 py-2 text-white hover:bg-blue-700 duration-200'>Submit</button>
      </div>
      </form>
  </div>
  {/* End */}
</div>

     </div>
   </>
  )
}

export default contact
