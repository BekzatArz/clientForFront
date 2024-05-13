import React from 'react'
import './Input.css'

const Input = (props) => {
    const handleChange = (e) => {
        props.setValue(e.target.value)
    }

  return (
    <input className='input' value={props.email} onChange={handleChange} placeholder={props.placeholder} type={props.type} id={props.id} />
  )
}

export default Input