import React from 'react'

function cards({ item }) {
  console.log(item);
  // const imageStyle = {
  //   width: '300px', /* Set desired width */
  //   height: '400px', /* Set desired height */
  //   objectFit:'fill', /* Ensures the image covers the area without distortion */
  // };
  return (
    <>
      <div className='mt-6 my-3 p-5'>
        <div className="card bg-base-100 w-92 h-[520px] shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-2">
          <figure className='dark:bg-slate-800 bg-yellow-50  rounded-t-2xl w-full h-80 flex items-center justify-center '>
            <img
              src={item.image}
              className='h-[20rem]'
              alt="Shoes"  />
          </figure>
          <div className="card-body px-4 py-4">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge cursor-pointer badge-outline hover:bg-pink-500 hover:scale-125 hover:text-white ">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default cards
