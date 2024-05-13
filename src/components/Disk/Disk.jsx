import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir, getFiles } from '../../actions/file';

import './Disk.css'
import FileList from './fileList/FileList';

const Disk = () => {
    const dispatch = useDispatch();
    const currentDir = useSelector(state => state.file.currentDir);

    useEffect(() => {
        dispatch(getFiles(currentDir));
    }, [currentDir, dispatch]);
    const createDirHandler = () => {
        dispatch(createDir(currentDir,'yeeeaaa'))
    }
    return ( 
        <div className='disk'>
            <div className='disk-btns'>
                <button className='disk_back'>Back</button>
                <button className='create-file' onClick={createDirHandler}>Create File</button>
            </div>
            <FileList />
        </div>
    );
}

export default Disk;