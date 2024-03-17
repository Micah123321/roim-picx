import router from "./plugins/router"
import storage from "./utils/storage";

router.beforeEach((to, from, next) => {
    // console.log(to.path)
    const path = to.path;
    const token = storage.local.get('auth-token');
    
    // 如果路径不是'/auth'或'/up'，且没有token，则重定向到'/auth'
    if (path !== '/auth' && path !== '/up' && !token) {
        router.push('/auth');
        return;
    }
    
    next();
})
