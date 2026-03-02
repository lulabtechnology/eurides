# Eurides Young Traducciones — Landing (Next.js + Tailwind + Framer Motion)

Landing page 1-página (App Router) en español para **servicios de traducción Inglés ↔ Español**, con estilo editorial + divertido (vibe azul potente + CTA amarillo) y placeholders listos para reemplazar.

> Regla importante: donde falten datos reales (precios, tiempos, etc.) verás **[REEMPLAZAR]**. No se inventó información.

---

## 1) Requisitos

- **Node.js 20.9+** (recomendado por Next.js)
- Cuenta de GitHub (web) y Vercel (web).

---

## 2) Estructura del proyecto (rápida)

- `/app` → layout + página principal
- `/components` → UI (Header, Hero, Secciones, etc.)
- `/public/images` → placeholders (SVG/WebP)
- `/lib/utils.ts` → helpers (WhatsApp / mailto)

---

## 3) Ejecutar localmente (opcional)

> Si no quieres correr local, puedes desplegar directo en Vercel igualmente.

1. Descarga / descomprime el zip
2. Abre una terminal en la carpeta del proyecto
3. Instala dependencias:
   - `npm install`
4. Ejecuta:
   - `npm run dev`
5. Abre:
   - `http://localhost:3000`

---

## 4) Reemplazos recomendados (para que quede listo)

1. **Dominio real**: en `app/layout.tsx`
   - Cambia `metadataBase`, `openGraph.url`, `alternates.canonical` y `ProfessionalService.url`.
2. **Datos [REEMPLAZAR]**:
   - Métodos de pago
   - Área de servicio
   - Tiempos de entrega
   - Respuesta en X horas
   - Testimonios reales (nombre/cargo)
   - Precios reales

---

## 5) Assets placeholders (cómo reemplazarlos)

Ruta: `public/images/`

- `hero-desktop.svg` y `hero-mobile.svg`  
  Reemplaza por tus ilustraciones reales manteniendo el mismo nombre.
- `clients/logo-1.svg ... logo-8.svg`  
  Reemplaza por logos reales si aplica.
- `video-poster.webp`  
  Reemplaza por un poster real para OG/Twitter.

**Consejo**: Mantén proporciones similares para evitar movimientos del layout (CLS).

---

## 6) Deploy en Vercel (ver guía paso a paso)

Abre: `VERCEL_DEPLOY.md`

---

## 7) Subir a GitHub SIN CLI (ver guía paso a paso)

Abre: `GITHUB_WEB_UPLOAD.md`

---

## 8) Checklist final

- [ ] Mobile-first: no hay desbordes horizontales.
- [ ] Todos los CTA llevan a Contacto o WhatsApp.
- [ ] Los anchors del menú funcionan.
- [ ] Contraste AA: texto oscuro sobre amarillo y blanco.
- [ ] `prefers-reduced-motion` respetado.
- [ ] Reemplazaste todos los **[REEMPLAZAR]**.
- [ ] Cambiaste el dominio en `app/layout.tsx`.
