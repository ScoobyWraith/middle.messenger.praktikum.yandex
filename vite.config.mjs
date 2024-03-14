import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

const root = 'src/pages';
const pages = {
    main: {
        path: 'index.html',
        context: { pageTitle: 'Главная', iconPathPrefix: './' },
    },
    login: {
        path: 'login/index.html',
        context: { pageTitle: 'Авторизация', iconPathPrefix: '../images/' },
    },
    registration: {
        path: 'registration/index.html',
        context: { pageTitle: 'Регистрация', iconPathPrefix: '../images/' },
    },
    profile: {
        path: 'profile/index.html',
        context: { pageTitle: 'Настройки пользователя', iconPathPrefix: '../images/' },
    },
    chats: {
        path: 'chats/index.html',
        context: { pageTitle: 'Список чатов', iconPathPrefix: '../images/' },
    },
    404: {
        path: '404/index.html',
        context: { pageTitle: 'Страница не найдена', iconPathPrefix: '../images/' },
    },
    500: {
        path: '500/index.html',
        context: { pageTitle: 'Технические работы', iconPathPrefix: '../images/' },
    },
};

function getRollupInputPages() {
    let result = {};

    for (let name in pages) {
        result[name] = resolve(__dirname, root, pages[name].path);
    }

    return result;
}

export default defineConfig({
    root: resolve(__dirname, root),
    build: {
        outDir: resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            input: getRollupInputPages(),
        },
    },
    resolve: {
        alias: {
            src: '/src',
        },
    },
    plugins: [
        handlebars({
            context(pagePath) {
                let targetPage = Object.values(pages)
                    .find(page => '/' + page.path == pagePath);
                return targetPage ? targetPage.context: {};
            },
            partialDirectory: resolve(__dirname, 'src/layouts'),
        }),
    ],
});
