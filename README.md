# eneriz-daniel.com

Web personal de Daniel Enériz. Sitio estático hecho con [Astro](https://astro.build), bilingüe (inglés en `/`, español en `/es/`), con fuentes, imágenes y estilos servidos desde el propio sitio. La única petición a terceros es el script de analítica de GoatCounter.

## Requisitos

- Node.js ≥ 22.12 (lo exige Astro 7)
- Python 3, solo para generar la vista previa estática (`npm run preview:static`)

## Comandos

```sh
npm install              # instalar dependencias (la primera vez)
npm run dev              # servidor de desarrollo en http://localhost:4321 con recarga en caliente
npm run build            # compilar el sitio a dist/
npm run preview          # servir dist/ tal y como quedará publicado
npm run preview:static   # compilar y generar preview/eneriz-web-preview.zip
```

`npm run dev` y `npm run preview` escuchan en todas las interfaces (`host: true` en `astro.config.mjs`), así que la web también es accesible desde la red local: `http://<ip-de-la-máquina>:4321/`.

`preview:static` genera una copia con rutas relativas que se abre con doble clic en `index.html`, sin servidor. Sirve para enviar la web a alguien por correo o mensajería. No sirve para publicar: para eso se usa `dist/`.

## Estructura

```
src/
├── i18n/content.ts         ← TODOS los textos (EN y ES), enlaces, email y stack
├── data/publications.ts    ← publicaciones y tesis
├── assets/portrait.jpg     ← foto de perfil (cuadrada)
├── styles/global.css       ← colores, tipografía y estilos comunes
├── layouts/Base.astro      ← <head>, cabecera (navegación, idioma, tema) y pie
├── components/
│   ├── Home.astro          ← página principal
│   ├── Research.astro      ← lista completa de publicaciones
│   └── PubItem.astro       ← una publicación
└── pages/                  ← rutas: index, research y sus copias en es/
public/CNAME             ← dominio para GitHub Pages
public/favicon.svg
scripts/static-preview.py
```

Las páginas de `src/pages/` son envoltorios de una línea que pasan el idioma a `Home` o `Research`. El contenido no se edita ahí.

## Cambiar el contenido

Casi todo se edita en **dos ficheros**, sin tocar componentes.

### Textos — `src/i18n/content.ts`

- **`site`**: nombre, email y enlaces del bloque de contacto (GitHub, LinkedIn…). Añadir o quitar una entrada de `links` actualiza la web directamente.
- **`thesisTitle`**: título de la tesis. Se usa en la sección de investigación y en la lista de tesis.
- **`stack`**: etiquetas de tecnologías, agrupadas. Cada grupo tiene el nombre en ambos idiomas.
- **`en` / `es`**: todos los textos de cada idioma, con la misma estructura. `es` está tipado como `typeof en`, de modo que si añades una clave en inglés y no en español el editor lo marca como error de TypeScript (la compilación no comprueba tipos, así que no lo detecta). Cambia siempre **los dos idiomas**.
  - `hero`: titular y frase principal.
  - `sections`: títulos de las secciones (las etiquetas `// …` de la izquierda).
  - `now`, `work`, `path`, `research`, `lab`, `contact`: contenido de cada sección. `path` es la trayectoria: cada entrada tiene `when`, `what` y `detail`.
  - `researchPage`: textos de la página `/research`.

Algunos textos (`now` y `research.intro`) admiten HTML en línea, como `<strong>` o `<em>`. El resto se muestra como texto plano.

Si escribes `TODO` en cualquier fecha de `path` o en una tesis, aparece resaltado en naranja en la web. Sirve para recordar datos pendientes; no publiques con ninguno.

### Publicaciones — `src/data/publications.ts`

Cada publicación es un objeto de la lista `publications`. Para añadir una, copia otra y ajusta los campos:

| Campo      | Obligatorio | Uso |
|------------|-------------|-----|
| `year`     | sí | Año. |
| `title`    | sí | Título. Enlaza al DOI (o a `url` si no hay DOI). |
| `authors`  | sí | Lista de autores. `D. Enériz` se resalta automáticamente. |
| `venue`    | sí | Revista o congreso completo (solo se ve en `/research`). |
| `tag`      | sí | Abreviatura corta en mayúsculas (`TIM`, `DCIS`…). |
| `kind`     | sí | `'journal'`, `'conference'` o `'local'` (jornadas y docencia). Determina la sección en `/research`. |
| `doi`      | no | Solo el identificador, sin `https://doi.org/`. |
| `url`      | no | Enlace alternativo si no hay DOI. |
| `code`     | no | Enlace al repositorio. |
| `note`     | no | Mención o premio, en ambos idiomas: `{ en: '…', es: '…' }`. |
| `selected` | no | `true` para mostrarla en la página principal. Conviene mantener 3–5. |

Dentro de cada sección el orden es el de la lista, así que mantenla de la más reciente a la más antigua.

Las tesis están en `theses`, en el mismo fichero.

### Foto — `src/assets/portrait.jpg`

Sustituye el fichero por otra imagen **cuadrada** con el mismo nombre. Astro la redimensiona y la convierte a WebP al compilar, así que puede ser grande. En la web se muestra en escala de grises y recupera el color al pasar el ratón (`.portrait` en `Home.astro`).

### Colores y tipografía — `src/styles/global.css`

Las variables del principio controlan todo el aspecto: `:root` para el tema oscuro (el predeterminado) y `:root[data-theme='light']` para el claro. Para cambiar el color de acento modifica `--accent` y `--accent-soft` en ambos bloques, y también el `fill` de `public/favicon.svg`.

Las fuentes (Geist y Geist Mono) vienen de los paquetes `@fontsource-variable/*` y se importan al principio del CSS.

## Detalles a tener en cuenta

- **Email**: la dirección de `site.email` nunca aparece en el HTML generado. Se guarda invertida y en base64, y un pequeño script la reconstruye en el navegador (`Home.astro`). Así se frena a los bots que rastrean direcciones en el HTML. Para comprobarlo tras compilar: `grep -r gmail dist/` no debe devolver nada.
- **Analítica**: [GoatCounter](https://eneriz-daniel.goatcounter.com), sin cookies. El script está en `Base.astro` y solo se incluye en la compilación de producción, así que `npm run dev` no genera visitas. Las estadísticas se consultan en el panel de GoatCounter.
- **Tema**: oscuro por defecto. La elección del visitante se guarda en `localStorage` (`theme`).
- **Idiomas**: las URLs de cada página en cada idioma están en `paths` (`content.ts`). El selector EN/ES de la cabecera enlaza a la misma página en el otro idioma.
- **Dominio**: `site` en `astro.config.mjs` se usa para las URLs canónicas y las etiquetas `hreflang`. Si cambia el dominio, actualízalo ahí. `public/CNAME` contiene el dominio personalizado que usa GitHub Pages: si cambia, actualízalo también.

## Despliegue

Se publica en GitHub Pages (`eneriz-daniel.com`) con el workflow `.github/workflows/deploy.yml`. Cada push a `master` compila el sitio y lo despliega; no hay que hacer nada más. También se puede lanzar a mano desde la pestaña *Actions* (*Run workflow*).

El workflow falla, y por tanto no publica, si la dirección de email aparece en claro en el HTML generado.

En *Settings → Pages* del repositorio, la fuente debe ser **GitHub Actions** y el dominio personalizado `eneriz-daniel.com`.

Para trabajar en cambios sin publicarlos, usa otra rama y fusiónala en `master` cuando estén listos.
