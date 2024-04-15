import React, { useEffect, useState } from 'react'

import { Card } from "flowbite-react";

const Shopp = () => {
  const [books, setBooks]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data => setBooks(data)); 
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card className='shadow-2xl'>
            <img src={book.imageURL} alt="" className='h-96'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mt-2">
             <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 p-1">
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui id illum minima nulla ut atque quia, error ab est harum voluptate repellat velit, enim delectus ipsum distinctio. Amet, odio error.</p>
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded mt-5'>Buy now</button>
          </Card>

          )
          }
      </div>
    </div>
  )
}

export default Shopp