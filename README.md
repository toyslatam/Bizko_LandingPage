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

## Personalización

Los colores de marca y tokens de diseño están centralizados en `:root` dentro de
`assets/styles.css`. Los enlaces de registro/CTA (`href="#"`) deben apuntar a la
app real de Bizko al integrar.
