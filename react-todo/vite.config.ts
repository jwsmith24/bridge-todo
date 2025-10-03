import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setupTests.ts",
        css: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
