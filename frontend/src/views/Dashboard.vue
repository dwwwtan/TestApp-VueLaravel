<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

// Tạo một "biến" để chứa thông tin user
const user = ref(null)
const loading = ref(true)

// onMounted() là một "hook" của Vue
// Nó sẽ tự động chạy code bên trong SAU KHI component này được "vẽ" lên màn hình
onMounted(async () => {
    try {
        // 1. "Bắn" request tới API /api/user (đã được bảo vệ bởi auth:sanctum)
        const response = await api.get('/api/user')

        // 2. Nếu thành công, "nhét" data user vào biến
        user.value = response.data

    } catch (error) {
        // 3. Nếu lỗi (thường là 401), nghĩa là user chưa login
        console.error('Chưa đăng nhập hoặc không lấy được thông tin user:', error)
        // Sau này, chúng ta sẽ tự động "đá" user về trang /login ở đây
    } finally {
        // Dù thành công hay thất bại, cũng tắt loading
        loading.value = false
    }
})
</script>

<template>
    <main>
        <h1>Trang Dashboard (Trang Chủ)</h1>

        <div v-if="loading">
            Đang tải thông tin...
        </div>

        <div v-else-if="user">
            <h2>Chào mừng trở lại, {{ user.name }}!</h2>
            <p>Email của bạn: {{ user.email }}</p>
        </div>

        <div v-else>
            <p>Vui lòng <RouterLink to="/login">đăng nhập</RouterLink> để xem nội dung.</p>
        </div>
    </main>
</template>