import React from 'react'
import { Link, Navigate, redirect, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
function signup() {

const location=useLocation();
const navigate=useNavigate();
const from=location.state?.from?.pathname||'/';

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo={
          name:data.name,
          email:data.email,
          password:data.password
        }
        
        await axios
        .post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>
        {
          console.log(res);
          if(res.data)
            {toast.success("SignUp Successfully");
            navigate(from,{replace:true});
            }
         localStorage.setItem("Users",JSON.stringify(res.data.user));

        })
        .catch((err)=>
        {
          if(err.response)
          {
            toast.error("Error: "+err.response.data.message);
          }
        })
      }

  return (
    <>
     <div className='flex h-screen items-center justify-center bg-slate-100'>
     <div className="w-[600px]">
        {/* Start */}
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)}  method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-xl">SignUp</h3>
      {/* Name */}
      <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
     <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'
     {...register("name", { required: true })}
     />
     <br/>
     {errors.name && <span className='text-sm text-red-500' >This field is required</span>}

     </div>
     {/*Email */}
     <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
     <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
     {...register("email", { required: true })}
     />
     <br/>
         {errors.email && <span className='text-sm text-red-500' >This field is required</span>}
     </div>

      {/*Password*/}
     <div className='mt-4 space-y-2'>
     <span>Password</span>
     <br/>
     <input type="password" placeholder='Enter your password'  className='w-80 px-3 py-1 border rounded-md outline-none'
     {...register("password", { required: true })}
     />
     <br/>
     {errors.password && <span className='text-sm text-red-500' >This field is required</span>}

     </div>
       {/*Button */}
      <div className='flex flex-wrap justify-around mt-6'>
        <button className='bg-pink-500 rounded-md px-4 py-1 text-white hover:bg-pink-700 duration-200'>Signup</button>
        <p>Have Account?{" "}     
        <span className='text-blue-500 underline cursor-pointer' onClick={()=> document.getElementById("my_modal_3").showModal()}>
        Login</span>{" "}
        <Login/>
        </p>
      </div>
      </form>
  </div>
  {/* End */}
</div>

     </div>
    </>
  )
}

export default signup
