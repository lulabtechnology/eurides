# Desplegar en Vercel (PASO A PASO, sin CLI)

## A) Crear cuenta / entrar
1. Entra a Vercel y **login** con tu cuenta (Google/GitHub/Email).

## B) Importar repositorio
1. En Vercel, presiona **Add New...**
2. Elige **Project**
3. Presiona **Import Git Repository**
4. Selecciona el repositorio `eurides-landing` (o el nombre que le pusiste)

> Si no ves el repositorio:
> - Asegúrate de haber subido los archivos a GitHub (ver `GITHUB_WEB_UPLOAD.md`)
> - Asegúrate de darle permisos a Vercel para ver tus repositorios.

## C) Configuración del build (por defecto)
En la pantalla de configuración:
- **Framework Preset**: Next.js (Vercel lo detecta solo)
- **Build Command**: (default)
- **Output Directory**: (default)
- **Install Command**: (default)

No necesitas tocar nada.

## D) Deploy
1. Presiona **Deploy**
2. Espera a que termine
3. Abre el link final que te da Vercel (ej. `https://...vercel.app`)

## E) Configurar dominio (si aplica)
1. Dentro del Project en Vercel, ve a **Settings**
2. Entra a **Domains**
3. Agrega tu dominio
4. Sigue las instrucciones de DNS que te muestra Vercel

## F) Importante (SEO)
Cuando tengas el dominio real:
1. Abre `app/layout.tsx`
2. Reemplaza:
   - `https://example.com` por tu dominio real (incluye https)
3. Haz commit y push en GitHub (subiendo el archivo actualizado)
4. Vercel redeploya automáticamente.
