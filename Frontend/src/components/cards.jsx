import React from 'react'

function cards({item}) {
    console.log(item);
  return (
    <>
    <div className='mt-6 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-2">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
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
