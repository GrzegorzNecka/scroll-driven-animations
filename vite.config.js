import { defineConfig } from "vite";

/**
 * Główna konfiguracja Vite (edukacyjna)
 *
 * UWAGA: Ten plik NIE JEST używany przy uruchamianiu projektów!
 * Wrapper script (run-project.js) uruchamia Vite WEWNĄTRZ folderu projektu,
 * więc każdy projekt może mieć własny vite.config.js.
 *
 * Ten plik służy jako przykład/szablon konfiguracji Vite.
 * Możesz go skopiować do folderu projektu i dostosować.
 */

export default defineConfig({
    // ===== SERVER =====
    // Konfiguracja dev servera
    server: {
        port: 3000, // Port na którym uruchamia się serwer
        open: true, // Automatycznie otwórz przeglądarkę
        strictPort: false, // Jeśli port zajęty, znajdź wolny
        host: true, // Nasłuchuj na wszystkich interfejsach (0.0.0.0)
        cors: true, // Włącz CORS

        // Hot Module Replacement
        hmr: {
            overlay: true, // Pokaż overlay z błędami w przeglądarce
        },

        // Proxy API (przykład)
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    },

    // ===== BUILD =====
    // Konfiguracja buildu produkcyjnego
    build: {
        outDir: "dist", // Folder output dla buildu
        assetsDir: "assets", // Subfolder dla assetów
        sourcemap: false, // Generuj sourcemapy (true dla debugowania)
        minify: "esbuild", // Minifikacja (esbuild jest szybszy niż terser)

        // Optymalizacja chunków
        rollupOptions: {
            output: {
                manualChunks: {
                    // vendor: ['react', 'react-dom'] // Przykład dla React
                },
            },
        },

        // Wielkość chunków
        chunkSizeWarningLimit: 1000, // Warning gdy chunk > 1000kb
    },

    // ===== CSS =====
    css: {
        devSourcemap: true, // Sourcemapy dla CSS w dev mode

        // CSS Modules
        modules: {
            localsConvention: "camelCase",
        },

        // Preprocessors (jeśli używasz)
        // preprocessorOptions: {
        //     scss: {
        //         additionalData: `@import "@/styles/variables.scss";`
        //     }
        // }
    },

    // ===== RESOLVE =====
    // Aliasy ścieżek
    resolve: {
        alias: {
            // '@': '/src',              // Przykład: import from '@/components'
            // '@components': '/src/components',
        },
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },

    // ===== PLUGINS =====
    // Wtyczki Vite
    plugins: [
        // Przykłady:
        // react(),                    // @vitejs/plugin-react
        // vue(),                      // @vitejs/plugin-vue
        // legacy({                    // @vitejs/plugin-legacy (dla starszych przeglądarek)
        //     targets: ['defaults', 'not IE 11']
        // })
    ],

    // ===== OPTIMALIZACJA =====
    optimizeDeps: {
        include: [], // Force pre-bundle dependencies
        exclude: [], // Exclude from pre-bundling
    },

    // ===== BASE PATH =====
    // Jeśli aplikacja nie jest w root URL
    // base: '/my-app/',

    // ===== PUBLIC DIR =====
    publicDir: "public", // Folder dla statycznych assetów (kopiowanych 1:1)

    // ===== ENV =====
    envPrefix: "VITE_", // Prefix dla zmiennych środowiskowych dostępnych w kodzie
});
