import { resolve } from 'path';
import { defineConfig } from 'vite';


export default defineConfig({
    root: resolve(__dirname, 'src/pages/'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                login: resolve(__dirname, 'src/pages/login/index.html'),
                registration: resolve(__dirname, 'src/pages/registration/index.html'),
                chats: resolve(__dirname, 'src/pages/chats/index.html'),
                profile: resolve(__dirname, 'src/pages/profile/index.html'),
                404: resolve(__dirname, 'src/pages/404/index.html'),
                500: resolve(__dirname, 'src/pages/500/index.html'),
            },
        },
    },
    resolve: {
        alias: {
            src: '/src',
        },
    },
});
