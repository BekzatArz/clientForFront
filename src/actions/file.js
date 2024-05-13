import axios from 'axios';
import { addFile, setFiles } from '../features/file/fileSlice';


const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export function getFiles(dirId) {
    return async (dispatch) => {
        try {
            await axios.get(`${VITE_API_BASE_URL}/files${dirId ? '?parent=' + dirId : ''}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(res => dispatch(setFiles(res.data)))
            // Отправка полученных данных в хранилище Redux, если это необходимо
        } catch (e) {
            console.log(e);
            // Обработка ошибок при необходимости
        }
    };
}

export function createDir(dirId, name) {
    return async (dispatch) => {
        try {
            axios.post(`${VITE_API_BASE_URL}/files`, {
                name,
                parent: dirId,
                type: 'dir'
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(res => dispatch(addFile(res.data)))
            // Отправка полученных данных в хранилище Redux, если это необходимо
        } catch (e) {
            console.log(e);
            // Обработка ошибок при необходимости
        }
    };
}