<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import api from '@/plugins/axios'

// Lấy "cái điều khiển" router
const router = useRouter()

// (Tạm thời) Chúng ta sẽ dùng Pinia để quản lý state "đã login" sau
// Giờ cứ tạo hàm logout đã
const handleLogout = async () => {
  try {
    // 1. "Bắn" request POST /logout
    await api.post('/logout')
    
    // 2. Báo cho user
    alert('Đã đăng xuất thành công!')

    // 3. Đẩy user về trang login
    router.push('/login')

  } catch (error) {
    console.error('Lỗi khi đăng xuất:', error)
    alert('Đăng xuất thất bại!')
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        
        <a href="#" @click.prevent="handleLogout">Logout</a>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}
</style>