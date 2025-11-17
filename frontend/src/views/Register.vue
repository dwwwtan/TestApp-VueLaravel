<script setup>
// 1. Import 'ref' để tạo "biến" (state) cho form
import { ref } from 'vue';

// 2. Import "trạm phát sóng" axios
import api from '@/plugins/axios';

// 3. Tạo các biến "buộc" (binding) vào input
//    ref('') nghĩa là "giá trị ban đầu là chuỗi rỗng"
const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

// 4. Hàm sẽ chạy khi form được submit
const handleRegister = async () => {
    try {
        // 5. "Bắn" data lên API /register của Laravel (Fortify)
        //    Chúng ta dùng 'await' để "chờ" API trả lời
        await api.post('/register', {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
        });

        // Nếu code chạy đến đây (không lỗi), nghĩa là đăng ký thành công!
        alert("Đăng ký thành công! Đang chuyển đến trang Login...");

        // (Tạm thời) chuyển người dùng sang trang login
        // (Sau này chúng ta sẽ dùng Vue Router để chuyển)
        window.location.pathname = '/login';

    } catch (error) {
        // 6. Nếu có lỗi (ví dụ: email tồn tại, pass < 8 ký tự...)
        console.error("Lỗi đăng ký:", error.response.data);
        alert("Đăng ký thất bại: " + error.response.data.message);
    }
};
</script>

<template>
    <div>
        <h1>Đăng Ký Tài Khoản Mới</h1>

        <form @submit.prevent="handleRegister">
            <div>
                <label for="name">Tên:</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div>
                <label for="password_confirmation">Xác nhận mật khẩu:</label>
                <input type="password" id="password_confirmation" v-model="password_confirmation" required>
            </div>

            <button type="submit">Đăng Ký</button>
        </form>
    </div>
</template>