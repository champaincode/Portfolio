import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ════════════════════════════════════════════════════════
//  🔒  VITE SECURITY CONFIG
//  Cabeceras de seguridad HTTP para el servidor de desarrollo.
//  Para producción, replica estas cabeceras en tu CDN/servidor
//  (Netlify: netlify.toml | Vercel: vercel.json | Nginx: add_header)
// ════════════════════════════════════════════════════════

const SECURITY_HEADERS = {
  // Evita que la página sea embebida en iframes (clickjacking)
  "X-Frame-Options": "DENY",

  // Evita MIME-type sniffing
  "X-Content-Type-Options": "nosniff",

  // Controla qué información de Referer se envía
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Deshabilita APIs del navegador no necesarias en un portfolio
  "Permissions-Policy": [
    "camera=()",
    "microphone=()",
    "geolocation=()",
    "payment=()",
    "usb=()",
    "bluetooth=()",
    "accelerometer=()",
    "gyroscope=()",
    "magnetometer=()",
  ].join(", "),

  // HSTS: fuerza HTTPS durante 1 año (solo activo en producción real)
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

  // Content Security Policy
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",            // React necesita inline en dev
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https://flagcdn.com https://upload.wikimedia.org",
    "connect-src 'self'",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; "),
};

export default defineConfig({
  plugins: [react()],

  // ── Servidor de desarrollo ──────────────────────────────
  server: {
    headers: SECURITY_HEADERS,
  },

  // ── Preview (vite preview) ──────────────────────────────
  preview: {
    headers: SECURITY_HEADERS,
  },

  // ── Build de producción ────────────────────────────────
  build: {
    // 🔒 Sin sourcemaps en producción: evita exponer código fuente
    sourcemap: false,

    // ⚡ Target moderno: evita transpilaciones innecesarias y reduce el bundle
    target: "es2020",

    // ⚡ Minificación CSS con LightningCSS (3× más rápido que postcss)
    cssMinify: "lightningcss",

    // ⚡ Inline assets pequeños (<4 KB) como data URIs para ahorrar RTTs
    assetsInlineLimit: 4096,

    // ⚡ Desactivar el análisis de gzip en build (costoso en CI; actívalo localmente)
    reportCompressedSize: false,

    // ⚡ Avisar si un chunk supera 500 KB (señal de que hay que dividirlo)
    chunkSizeWarningLimit: 500,

    // Chunk splitting: reduce la superficie de cada bundle.
    // ⚠️  Vite 8 / Rolldown requiere manualChunks como función.
    rollupOptions: {
      output: {
        // Nombres con hash corto para cache busting óptimo
        chunkFileNames:  "assets/js/[name]-[hash:8].js",
        entryFileNames:  "assets/js/[name]-[hash:8].js",
        assetFileNames:  "assets/[ext]/[name]-[hash:8].[ext]",

        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("node_modules/framer-motion")) {
            return "motion";
          }
          if (
            id.includes("node_modules/i18next") ||
            id.includes("node_modules/react-i18next") ||
            id.includes("node_modules/i18next-browser-languagedetector")
          ) {
            return "i18n";
          }
          if (id.includes("node_modules/react-icons")) {
            return "icons";
          }
        },
      },
    },
  },
});
