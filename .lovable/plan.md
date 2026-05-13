## Objetivo
Convertir el proyecto a un sitio estático que Netlify pueda servir directamente, manteniendo todo el contenido y diseño actual intactos.

## Enfoque
El sitio es una sola página de contenido estático (sin login, sin base de datos, sin formularios que envíen datos al servidor). No necesitamos SSR ni Workers. La forma más limpia y robusta para Netlify es reemplazar el stack actual (TanStack Start + Cloudflare Workers) por un Vite + React SPA puro.

Esto evita peleas con prerender de TanStack Start sobre Cloudflare y produce un `dist/` plano que Netlify sirve sin configuración especial.

## Cambios técnicos

1. **Dependencias**
   - Quitar: `@tanstack/react-start`, `@tanstack/react-router`, `@cloudflare/vite-plugin`, `@lovable.dev/vite-tanstack-config`, `wrangler`.
   - Añadir: `@vitejs/plugin-react`, `react-router-dom` (opcional; con una sola página podemos omitirlo).

2. **Estructura nueva**
   ```
   index.html              ← nuevo, raíz Vite SPA
   src/
     main.tsx              ← createRoot + <App/>
     App.tsx               ← contenido actual de routes/index.tsx
     styles.css            ← se mantiene igual
     assets/               ← se mantiene igual
   vite.config.ts          ← reemplazado por config Vite estándar
   netlify.toml            ← build command + publish dir
   ```

3. **Eliminar**
   - `src/routes/`, `src/router.tsx`, `src/server.ts`, `src/start.ts`, `src/routeTree.gen.ts`, `src/lib/error-page.ts`, `src/lib/error-capture.ts`, `wrangler.jsonc`.

4. **netlify.toml**
   ```toml
   [build]
     command = "bun run build"
     publish = "dist"
   ```

5. **Mover el contenido**
   - El JSX completo del componente `Index` actual (header, hero, secciones, footer, logo, imágenes) pasa tal cual a `App.tsx`. No se toca ningún texto, color, imagen ni clase Tailwind.
   - Los `<head>` (title, meta description, og:*) pasan a `index.html`.

## Lo que NO cambia
- Diseño, colores, tipografía, tokens en `src/styles.css`.
- Textos en español, exactamente como están.
- Imágenes generadas y logo.
- Enlaces de WhatsApp, Instagram y datos de contacto.

## Después de los cambios
- En Lovable seguirás viendo el preview funcionando como SPA.
- En Netlify: push al repo → Netlify detecta `bun run build` → publica `dist/`.
- Como es SPA de una sola ruta, no hace falta regla de redirects.

## Riesgo
Es un refactor de stack, no una edición pequeña. Una vez hecho, ya no podrás usar funciones de servidor de TanStack Start sin volver atrás. Para tu caso (sitio de presentación) eso no es problema.

¿Procedo con la conversión?