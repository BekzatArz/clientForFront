import axios from 'axios';
import { setUser } from '../features/user/userSlice';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL
export const registration = async (email, password) => {
    try {
        const res = await axios.post(`${VITE_API_BASE_URL}/auth/registration`, {
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
            const res = await axios.post(`${VITE_API_BASE_URL}/auth/login`, {
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
            const res = await axios.get(`${VITE_API_BASE_URL}/auth/auth`, {headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}});
            dispatch(setUser(res.data.user))
            localStorage.setItem('token', res.data.token)
            console.log(res);
        } catch (err) {
            console.log(err);
            localStorage.removeItem('token')
        }
    };
};