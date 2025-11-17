<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Import "cái điều khiển" router
import api from '@/plugins/axios'

// Tạo biến cho form
const email = ref('')
const password = ref('')

// Lấy router để "chuyển trang" sau khi login
const router = useRouter()

const handleLogin = async () => {
    try {
        // 1. "Bắn" data lên API /login (Fortify)
        await api.post('/login', {
            email: email.value,
            password: password.value,
        })

        // 2. Nếu code chạy đến đây, login thành công!
        alert('Đăng nhập thành công!')

        // 3. "Đẩy" user về trang Dashboard (trang chủ)
        router.push('/')

    } catch (error) {
        // 4. Nếu lỗi (ví dụ: 401 hoặc 422)
        console.error('Lỗi đăng nhập:', error)
        alert('Đăng nhập thất bại: Email hoặc mật khẩu không đúng.')
    }
}
</script>

<template>
    <div>
        <h1>Đăng Nhập</h1>

        <form @submit.prevent="handleLogin">
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Mật khẩu:</label>
                <input type="password" id="password" v-model="password" required>
            </div>

            <button type="submit">Đăng Nhập</button>
        </form>
    </div>
</template>