import React from 'react'

import './FileList.css'
import { useSelector } from 'react-redux'
import File from './file/File'

const FileList = () => {
    const files = useSelector(state => state.file.files).map(file => <File key={file.id} file={file} />)
    
  return (
    <div className='filelist'>
        <div className="filelist-header">
            <div className="filelist-name">Name</div>
            <div className="filelist-date">Date</div>
            <div className="filelist-size">Size</div>
        </div>
        <div className="files">
        {files}
        </div>
    </div>
  )
}

export default FileList