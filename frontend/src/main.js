// src/main.js

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// 1. Import "trạm phát sóng" api của chúng ta
import api from './plugins/axios';

// 2. Thực hiện "cái bắt tay" CSRF NGAY LẬP TỨC
//    Chúng ta cần nó trước khi có thể login/register
api.get('/sanctum/csrf-cookie').then(response => {
    // Khi "bắt tay" xong... thì mới khởi động Vue
    // (Đây là một cách làm đơn giản)
    console.log("CSRF Cookie Set!");

    const app = createApp(App);

    app.use(createPinia());
    app.use(router);
    
    // (Tùy chọn) Gán 'api' vào toàn cục để gọi ở bất cứ đâu
    app.config.globalProperties.$api = api;

    app.mount('#app');

}).catch(error => {
    console.error("Error setting CSRF cookie:", error);
});