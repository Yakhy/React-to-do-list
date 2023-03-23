import React from 'react'
import { useState } from 'react'
import "./Form.css"
export default function Modal({setShow, itemId, editItem}) {
  const [query, setQuery] = useState("")

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(query)
  editItem(itemId, query)
  setShow(false)
 }

  return (
    <div className='modal'>
     <form className='form' onSubmit={handleSubmit}>
      <input type="text"  className='input' required onChange={(e)=> {
          setQuery(e.target.value)
      }}/>
      <button className='btn'>Submit</button>
     </form>
      <button className='btn' onClick={()=> {
        setShow(false)
      }}>
        Close Modal</button>
    </div>
  )
}
