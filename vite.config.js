import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Deployed to https://arkhash0309.github.io (user page) — base is '/'.
export default defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
