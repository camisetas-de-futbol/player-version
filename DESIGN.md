# Design — Player Version

El marcador del estadio. La tienda se lee como el viejo marcador simultáneo de los campos españoles: panel negro, cifras en bombillas ámbar, filas que se encienden. Las fotos reales de las camisetas son la imagen; todo lo demás es tipo y color plano.

## Tokens (styles.css, `:root`)

| Rol | Token | Valor |
| --- | --- | --- |
| Suelo (panel) | `--bg` | `#0e0f0c` |
| Fila alterna | `--surface` | `#171914` |
| Controles | `--surface-2` / `--surface-3` (hover) | `#22251d` / `#2d3127` |
| Tinta (bombilla blanca) | `--ink` | `#f0eee8` |
| Texto secundario | `--mute` | `#b4b0a2` |
| Acento (bombilla encendida) | `--amber` / `--amber-2` (hover) | `#ffb21c` / `#ffc650` |
| Tinta sobre ámbar | `--amber-ink` | `#1a1306` |
| Bombilla apagada | `--bulb-off` | `#2a2c24` |
| Fondo de foto | `--studio` | `#e6e4de` |
| Borde de campo de formulario | `--line` | `#3a3d33` |

El ámbar solo va en: la acción principal, cifras en bombillas, estado activo (chip, talla) y el campo de "Cómo comprar". Nunca decorativo.

## Tipo

Una familia: **Archivo** (alojada en `assets/fonts/`, la página de cookies promete no usar servicios externos). 400 texto, 600 funcional, 700 titulares. Titulares con `letter-spacing:-0.04em` y `line-height:0.9`.

Cinco tamaños: `--step-small` 14 · `--step-body` 17 · `--step-lead` 20–26 · `--step-head` 32–48 · `--step-hero` 40–92. El nombre gigante del pie (`.foot-word`) es el logotipo, no un sexto tamaño. Titulares: dos líneas como máximo a cualquier anchura.

## Reglas de forma

- Esquinas rectas en todo (botones, fotos, chips, campos). El logo redondo es la única curva.
- Sin líneas divisorias: las superficies se separan por escalón de tono (filas alternas `--surface`/`--bg`). Solo los campos de formulario llevan borde.
- Sin degradados, sin sombras en reposo, sin cristal. Sombra solo en lo que flota (menú móvil, aviso de copiado).
- Sin etiquetas encima de los titulares, sin numeración 01/02/03, sin mayúsculas espaciadas. Mayúsculas solo en los nombres de competición del marcador.

## Componentes propios

- **Bombillas** (`bombillas()` / `encender()` en web.js): matriz 5×7 en SVG para cifras y textos cortos (A–Z, 0–9). Marca un elemento con `data-bulbs` (y `data-bulbs-label` para lectores de pantalla). Se encienden columna a columna al entrar en pantalla.
- **Alineación en arco** (`[data-arc]`, portada): las fotos con `foto_real` en fila con scroll-snap; la central grande, las hermanas más pequeñas y oscuras. Arrastrar, deslizar, flechas o clic en una hermana.
- **Marcador de competiciones** (`[data-ligas]`): filas alternas; al pasar el ratón la fila se enciende en ámbar y asoman tres camisetas.
- **Fila que se arrastra** (`.rail`): recortada en el margen de la página.
- **Tablero de talla** (`#tablero`, ficha): escribe "TALLA M" al elegir talla.

## Movimiento

Entrada por piezas (`.reveal` + `.rv`, sube 24 px con opacidad, escalonado 80 ms), encendido de bombillas, arco que escala con el scroll, feedback de pulsación `scale(0.97)`. Todo con alternativa para `prefers-reduced-motion`.
