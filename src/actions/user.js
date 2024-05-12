import axios from 'axios';
import { setUser } from '../features/user/userSlice';

export const registration = async (email, password) => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        });
        console.log(res);
    } catch (err) {
        console.log(err.response.data.message);
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };
};

export const auth = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('http://localhost:5000/api/auth/auth', {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
            console.log(res);
        } catch (err) {
            console.log(err);
            localStorage.removeItem('token')
        }
    };
};