import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

import {  Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategoies =[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory]= useState(bookCategoies[0]);

  const handleChangeSelectedValue =(event)=>{
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  const handleBookSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category  = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    console.log(bookObj)

    // send data to data base 

    fetch("http://localhost:5000/upload.book",{
      method : "POST",
      headers:{
        "Content-type":"application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book uploaded sucessfully!!!")
      form.reset();
    })
}
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
    <form  onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/*first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle"  name="bookTitle" type="text" placeholder="Book Name" required />
      </div>
      {/*author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName"  name="authorName" type="text" placeholder="Author Name" required />
      </div>
      </div>

      {/*2nd row */}

      <div className='flex gap-8'>
      
      {/*image url */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput id="imageURL"  name="imageURL" type="text" placeholder="Image URL" required />
      </div>

      {/** */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="categoryName" value="Book Category" />
        </div>
      <Select id='categoryName' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
      {
        bookCategoies.map((option) => <option key={option} value={option}>{option}</option>)
      }
      </Select>
        
      </div>
      </div>

      {/*book description */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
      </div>
      <Textarea id="bookDescription" name="bookDescription"  placeholder="Write your book description ..." required className="w-full" rows={4} />
      </div>

      {/*book pdf link */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
      </div>
      <TextInput id="bookPDFURL" name="bookPDFURL"  placeholder="Book PDF URL" required className="w-full" rows={4} />
      
      </div>

      <Button type="submit" className='mt-5 text-center bg-blue-900'>Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBooks