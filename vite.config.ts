import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vitest/config';
import {exec} from 'child_process';

export default defineConfig(() => {
    exec("npm run openapi:build");

    return {
        plugins: [sveltekit()],
        test: {
            include: ['src/**/*.{test,spec}.{js,ts}']
        },
        server: {
            proxy: {
                "/api": {
                    target: "http://127.0.0.1:8000",
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
    }
});
