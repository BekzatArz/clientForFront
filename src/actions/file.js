import axios from 'axios';
import { setFiles } from '../features/file/fileSlice';

export function getFiles(dirId) {
    return async (dispatch) => {
        try {
            await axios.get(`http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`, {
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