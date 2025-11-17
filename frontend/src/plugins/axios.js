import axios from 'axios';

// Tạo một "phiên bản" axios riêng
const api = axios.create({
    // 1. Địa chỉ "nhà" của Backend API
    baseURL: 'http://localhost:8000',

    // 2. DÒNG LỆNH SỐNG CÒN:
    // Bắt buộc Axios phải gửi cookie (như laravel_session)
    // qua các domain khác nhau (từ 5173 -> 8000)
    withCredentials: true, 
});

// Xuất "phiên bản" này ra để toàn bộ app sử dụng
export default api;