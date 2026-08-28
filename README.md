# Bizko — Landing Page

Landing page comercial oficial de **Bizko**, la plataforma todo-en-uno para PYMES:
ventas, inventario, catálogo online, clientes, pedidos, facturación, IA, CRM,
marketing y automatizaciones en un solo lugar.

## Características

- **Sitio estático** (HTML + CSS + JS), sin build ni dependencias → carga rápida.
- **Mobile-first** y totalmente responsive (móvil, tablet, laptop, desktop).
- **UI del producto como protagonista**: dashboards, POS, catálogo, inventario,
  pipeline CRM y asistente de IA construidos en HTML/CSS (sin fotos genéricas).
- **Enfocado en conversión**: CTAs "Comenzar gratis" en toda la página + CTA
  fija en móvil.
- **SEO listo**: `<title>`, meta description, Open Graph, datos estructurados
  (JSON-LD) y jerarquía semántica H1/H2/H3.
- **Accesible**: contraste, foco, `prefers-reduced-motion`, navegación por teclado.

## Estructura

```
index.html          Página completa (todas las secciones)
assets/styles.css   Sistema de diseño y componentes
assets/script.js    Interacciones (nav móvil, FAQ, tabs de demo,
                    toggle de precios mensual/anual, reveal on scroll)
```

## Secciones

Hero · Módulos · Tipos de negocio · Ventas/POS · Catálogo online · Restaurantes ·
Inventario · Facturación · CRM · IA · Marketing con IA · Automatizaciones ·
Demostración interactiva · Cómo funciona · Beneficios · Precios · Comparación de
planes · FAQ · CTA final · Footer.

## Uso

Abre `index.html` en el navegador, o sírvelo con cualquier servidor estático:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Identidad de marca

La landing aplica el **Manual de marca bizko v1.0**:

- **Logo**: tienda + lupa, wordmark en minúsculas `bizko`.
- **Colores**: Violeta `#8B7CF6` (primario), Indigo noche `#1E1B4B` (oscuro/texto),
  Coral `#F97362` (CTA y notificaciones), Lila `#C4B5FD`, Lavanda `#F5F3FF`.
  Regla 60 / 25 / 10 / 5.
- **Tipografía**: Poppins (títulos) + Inter (cuerpo).
- **Botones**: primario coral; secundario borde violeta.

## Galería del producto

La sección **"Conoce bizko por dentro"** (`#galeria`) muestra 8 pantallas de la
aplicación (Dashboard, POS, Inventario, Catálogo, Pedidos, CRM, IA, Marketing)
con lightbox al hacer clic. Los mockups usan datos de demostración; los módulos en
evolución están marcados con una etiqueta *Demostración / Vista previa*.

> Los mockups son reconstrucciones fieles a la marca. Cuando existan capturas
> reales de la app, se reemplazan dentro del mismo marco (`.frame`) sin cambiar el
> layout.

## Personalización

Los colores de marca y tokens de diseño están centralizados en `:root` dentro de
`assets/styles.css`. Los enlaces de registro/CTA (`href="#"`) deben apuntar a la
app real de bizko al integrar.
