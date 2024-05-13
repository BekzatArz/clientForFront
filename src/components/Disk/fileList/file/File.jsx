import React from 'react'
import logo  from './file.png'
import Img from './img.png'

import './File.css'
import { useDispatch } from 'react-redux'
import { setCurrentDir } from '../../../../features/file/fileSlice'

const File = ({file, key}) => {
  const dispatch = useDispatch()
  const openDirHandler = () => {
    dispatch(setCurrentDir(file._id))
  }
  return (
    <div key={key} className='file' onClick={openDirHandler}>
        <img src={file.type === "dir" ? logo : Img } width={70} className='file__img' alt="" />
        <div className="file_des">
            <div className="">{file.name}</div>
            <div className="">{file.date}</div>
            <div className="">{file.size}</div>
        </div>
        
    </div>
  )
}

export default File