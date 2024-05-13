import React, { useState, useEffect } from 'react'
import Input from '../SignIn/Input'
import './Popup.css'
import { createDir, getFiles } from '../../actions/file'
import { useDispatch, useSelector } from 'react-redux'

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.file.currentDir);
    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir, dispatch]);
    const createDirHandler = () => {
        dispatch(createDir(currentDir,dirName))
    } 
  return (
    <div className='popup'>
        <div className="popup__content">
            <div className="popup__header">
                <div className="title">Create new File</div>
            </div>
            <Input type="text" setValue={setDirName} value={dirName} placeholder="Введите имя папки"/>
            <div className="create__dir" onClick={createDirHandler}>
                Create Folder
            </div>
        </div>
    </div>
  )
}

export default Popup