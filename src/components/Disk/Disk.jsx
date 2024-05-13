import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';

import './Disk.css'
import FileList from './fileList/FileList';
import Popup from './Popup';
import { popFromStack } from '../../features/file/fileSlice';

const Disk = () => {
    const dispatch = useDispatch()
    const stack = useSelector(state => state.file.dirStack)
    const backHandler = () => {
        if (stack.length > 0) {
            dispatch(popFromStack(stack[stack.length - 1]));
            // Вместо того, чтобы вызывать getFiles здесь, вы можете внести его в функцию popFromStack в fileSlice, если это необходимо
            // Получить файлы из предыдущего каталога
        }
    }
    return ( 
        <div className='disk'>
            <div className='disk-btns'>
                <button className='disk_back' onClick={backHandler}>Back</button>
            </div>
            <FileList />
            <Popup />
        </div>
    );
}

export default Disk;