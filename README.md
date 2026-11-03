# Hangul & Hanzi Glow Academy 🪷🇰🇷🇨🇳
### Sistema Académico Dual de Coreano & Chino Mandarín (Cátedras de Seúl & Beijing)

> **Diseño Glassmorphic Translúcido** inspirado en los Conceptos seleccionados:
> * **Concepto 15:** Santuario de Lotos & Escudos Prismáticos
> * **Concepto 16:** Palacio Real Gyeongbok & Sendero de Faroles
> * **Concepto 13:** Sakura Pavilion & Niebla Mística

---

## 📱 Adaptación Completa a Celulares & Dispositivos Móviles

Esta aplicación está **100% optimizada para dispositivos móviles y pantallas táctiles**:
* **Diseño totalmente responsivo**: cuadrículas fluidas que se adaptan desde pantallas pequeñas de 320px (iPhone SE, Galaxy A) hasta tablets y monitores 4K.
* **Tap targets generosos**: botones táctiles con respuesta auditiva táctil (Web Audio API), pestañas de navegación con desplazamiento horizontal suave y menús compactos.
* **Modo Simulador Móvil en Vivo**: incluye una vista de simulador de teléfono inteligente para practicar lecciones y ejercicios en formato compacto de bolsillo.
* **Audio Web Speech Synthesis integrado**: pronunciación nativa de alta fidelidad para coreano (`ko-KR`) y chino mandarín (`zh-CN`) sin requerir descargas pesadas ni conexión a servidores externos.

---

## 🚀 Cómo Subir y Armar este Proyecto en GitHub

Sigue estos sencillos pasos desde la terminal de tu computadora o dentro de este entorno para subir el proyecto a tu cuenta de GitHub:

### Paso 1: Crear un nuevo repositorio en GitHub
1. Entra a [github.com/new](https://github.com/new).
2. Asigna un nombre a tu repositorio (por ejemplo: `hangul-hanzi-academy`).
3. Elige si será **Público** o **Privado**.
4. **No** marques la casilla de "Add a README" (ya tenemos este archivo listo).
5. Haz clic en el botón verde **"Create repository"**.

### Paso 2: Conectar y subir el código desde tu terminal
Abre tu terminal en la carpeta raíz de este proyecto y ejecuta:

```bash
# 1. Inicializar git (si aún no está iniciado)
git init

# 2. Agregar todos los archivos al seguimiento
git add .

# 3. Crear el primer commit con el proyecto completo
git commit -m "feat: Hangul & Hanzi Glow Academy con Cátedras de Seúl y Beijing"

# 4. Asegurarse de estar en la rama principal main
git branch -M main

# 5. Conectar con tu repositorio remoto de GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# 6. Subir todo el código a GitHub
git push -u origin main
```

¡Listo! Todo el código, componentes, imágenes de los conceptos y páginas del libro HSK estarán en tu GitHub.

---

## 💻 Cómo Ejecutar el Proyecto Localmente

Si descargas el repositorio en tu computadora con Node.js instalado (versión 18 o superior):

```bash
# 1. Instalar todas las dependencias
npm install

# 2. Iniciar el servidor de desarrollo en el puerto 3000
npm run dev
```

Abre en tu navegador favorito:
```
http://localhost:3000
```

Para crear la versión final optimizada para producción:
```bash
npm run build
```

---

## 🌐 Cómo Desplegar en la Web (Gratis en 2 Minutos)

Una vez que el proyecto esté en tu GitHub, puedes publicarlo en internet de forma gratuita con un solo clic:

* **Opción A - Vercel (Recomendada):**
  1. Entra a [vercel.com](https://vercel.com) e inicia sesión con tu GitHub.
  2. Haz clic en **"Add New Project"** y selecciona tu repositorio.
  3. Deja los valores por defecto (Framework Preset: **Vite**).
  4. Haz clic en **"Deploy"**. En 45 segundos tendrás un enlace público HTTPS que podrás abrir desde tu celular.

* **Opción B - Netlify:**
  1. Entra a [netlify.com](https://netlify.com).
  2. Elige **"Import from Git"** y selecciona tu repositorio.
  3. Build command: `npm run build`, Publish directory: `dist`.
  4. Haz clic en **"Deploy"**.

---

## 📚 Estructura Pedagógica de la Aplicación

### 1. Claustro Docente de Excelencia (Adaptado para México)
* **Dra. Min-ji Park (박민지 교수)**: Catedrática de la Universidad Nacional de Seúl (SNU) y docente invitada en la UNAM. Especialista en la morfosintaxis del coreano explicada a hispanohablantes de México.
* **Dra. Li Wei (李薇 教授)**: Catedrática de la Universidad de Lengua y Cultura de Beijing (BLCU) y asesora en El Colegio de México (Colmex). Doctora en fonética tonal, evolución de ideogramas del HSK 1 y lenguaje digital de redes chinas.

### 2. Metodología de Desglose Anatómico (Nivel Cero Absoluto)
Cada lección explica la estructura de la lengua respondiendo con precisión quirúrgica:
* **¿Qué se quita?**
* **¿De dónde se quita?**
* **¿Por qué se quita?**
* **¿Cuándo se quita?**
* **¿Qué pegamento se añade?**
* **Separación de piezas:** `[Persona/Sujeto] + [Etiqueta Pegamento] + [Objeto] + [Verbo/Acción]`.

### 3. Contenido Cuantitativo
* **16 Ejemplos Atómicos por Lección**: con pronunciación guiada fonéticamente para mexicanos, desglose literal, significado natural y audio interactivo.
* **20 Ejercicios Interactivos por Lección**: reactivos prácticos con comprobación instantánea, contador de aciertos y explicaciones de cátedra.
* **Jergas Callejeras y Modismos Regionales**: Seúl e Itaewon (`대박`, `인싸`, `치맥`, `깐부`, `멘붕`, `JMT`), acrónimos de KakaoTalk (`ㅋㅋ`, `ㅎㅎ`, `ㅇㅇ`), dialecto de Busan Satoori (`와그라노`), redes chinas de WeChat/Douyin (`yyds`, `绝绝子`, `摆烂`, `摸鱼`, `破防`, `社死`) y el acento pekinés con rhotacismo (`儿化音: 哪儿, 这儿`).
* **12 Páginas Oficiales del Libro HSK 1**: visor interactivo con audios sincronizados, trazos caligráficos (`横`, `竖`, `撇`, `点`, `捺`) y evolución de caracteres (`口`, `见`, `山`, `小`, `不`).

---

## 🛠️ Tecnologías Utilizadas

* **React 19** + **TypeScript**
* **Vite 8** (Build ultra-rápido)
* **Tailwind CSS v4** (Diseño de cristal esmerilado translúcido con desenfoque de fondo `backdrop-blur`)
* **Lucide React** (Iconografía limpia de alta legibilidad)
* **Web Audio API & Web Speech API** (Síntesis de voz nativa en `ko-KR` y `zh-CN` con efectos de sonido analógicos)
