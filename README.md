# ⚽ RETROKITS FC – Tienda de Camisetas Retro

## 🌟 Descripción del proyecto

**RETROKITS FC** es una aplicación web desarrollada con React y Vite, inspirada en la cultura del fútbol y las camisetas históricas de diferentes selecciones.

El proyecto presenta una tienda ficticia de camisetas retro, con una interfaz moderna, deportiva y adaptable a diferentes dispositivos. Además, incorpora diferentes ejercicios y funcionalidades desarrolladas durante el aprendizaje de React, como el manejo de propiedades (*Props*), el uso de Hooks, el consumo de APIs externas y la navegación entre páginas.

La aplicación utiliza Bootstrap para construir sus interfaces y mantener una identidad visual uniforme en sus diferentes componentes.

## 🚀 Características

- **Diseño deportivo:** Interfaz inspirada en el fútbol retro, con fondos oscuros, textos blancos y detalles en colores neón.
- **Navegación entre páginas:** Utiliza React Router DOM para desplazarse entre las diferentes secciones de la aplicación.
- **Página principal:** Presenta una colección de camisetas históricas de selecciones de fútbol.
- **Inicio de sesión:** Formulario visual para practicar la construcción de interfaces y el manejo de eventos en React.
- **Consumo de API:** Integración con la API de Rick and Morty para consultar personajes, realizar búsquedas y navegar entre páginas.
- **Uso de Props:** Ejercicio práctico para transmitir información entre componentes mediante propiedades.
- **React Hooks:** Implementación de `useState` y `useEffect` para gestionar estados y efectos secundarios.
- **Diseño adaptable:** Utilización de clases de Bootstrap para organizar los elementos según el tamaño de pantalla.
- **Arquitectura modular:** Organización de los componentes por funcionalidades para facilitar su mantenimiento y reutilización.

## 🛠️ Pila tecnológica

### Tecnologías principales

- **Frontend:** React.
- **Herramienta de compilación:** Vite.
- **Lenguaje de programación:** JavaScript.
- **Estilos y diseño:** Bootstrap 6.0.0-alpha.1.
- **Enrutamiento:** React Router DOM.
- **Gestión de estados y efectos:** React Hooks (`useState`, `useEffect`).
- **Consumo de servicios externos:** Fetch API.

### Herramientas de desarrollo

- Visual Studio Code.
- Node.js.
- npm.
- Git y GitHub.

## 📦 Instalación

Para ejecutar el proyecto de manera local, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/sebas17-code/Tll1react
   ```

2. Ingresa a la carpeta del proyecto:

   ```bash
   cd T1_react
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre el navegador y accede a la dirección local que proporciona Vite, normalmente:

   ```text
   http://localhost:5173
   ```

## 💻 Uso de la aplicación

Al iniciar la aplicación, podrás acceder a sus diferentes secciones mediante el menú de navegación.

### 🏠 Inicio – RETROKITS FC

La página principal presenta la tienda ficticia de camisetas retro.

Productos de ejemplo:

| Producto | Año | Precio |
|---|---:|---:|
| Alemania | 1990 | $85.00 |
| Argentina | 1986 | $90.00 |
| Brasil | 1994 | $80.00 |

La sección incluye fotografías, nombres, años y precios de las camisetas, acompañados de una presentación visual inspirada en el fútbol clásico.

### 🔐 Inicio de sesión

Contiene un formulario con campos de correo electrónico y contraseña, una opción para recordar la sesión y enlaces adicionales.

Esta sección funciona como una demostración visual del manejo de formularios y eventos en React. No cuenta todavía con un sistema de autenticación real.

### 🌐 Rick and Morty – API

Esta sección permite consultar información de personajes utilizando la API pública de Rick and Morty:

https://rickandmortyapi.com/api/character

Entre sus funcionalidades se encuentran:

- Consulta de personajes mediante `fetch`.
- Buscador dinámico mientras se escribe.
- Paginación para navegar entre resultados.
- Visualización de imágenes y características de los personajes.
- Manejo de estados de carga y errores.

Para su desarrollo se utilizan los Hooks `useState` y `useEffect`.

### 👥 Props – Propiedades en React

Esta página presenta un ejercicio práctico sobre el uso de propiedades (*Props*) en React.

Se utilizan tres perfiles de personas para demostrar cómo transmitir información entre componentes, incluyendo nombres, identificadores de imágenes y tamaños.

El ejercicio permite comprender cómo reutilizar componentes y personalizar su contenido mediante propiedades.

## 📂 Estructura del proyecto

La aplicación está organizada de manera modular, separando los componentes según su funcionalidad.

```text
T1_react/
│
├── public/
│   ├── Alemania.jpg
│   ├── Argentina.jpg
│   ├── Brasil.jpg
│   ├── deadpool.jpg
│   ├── images.jpg
│   ├── images2.jpg
│   └── ...
│
├── src/
│   │
│   ├── features/
│   │   │
│   │   ├── auth/
│   │   │   └── components/
│   │   │       └── Login.jsx
│   │   │
│   │   └── landing/
│   │       └── components/
│   │           ├── Header.jsx
│   │           ├── Main.jsx
│   │           ├── Footer.jsx
│   │           ├── Props.jsx
│   │           └── Rickandmorty.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Identidad visual

RETROKITS FC utiliza una identidad gráfica inspirada en el fútbol, la cultura urbana y las camisetas clásicas.

La paleta de colores principal incluye:

| Color | Código |
|---|---|
| Negro oscuro | `#0c0212` |
| Magenta neón | `#ff007f` |
| Azul eléctrico | `#00e5ff` |
| Amarillo | `#ffea00` |
| Naranja | `#ff3300` |
| Blanco | `#ffffff` |

Se priorizan los fondos oscuros, los títulos en mayúsculas, los detalles de colores llamativos y los diseños limpios y responsivos.

## 📚 Objetivos de aprendizaje

Este proyecto permite poner en práctica diferentes conceptos fundamentales del desarrollo con React:

- Creación y reutilización de componentes.
- Transmisión de datos mediante Props.
- Manejo de estados con `useState`.
- Ejecución de efectos con `useEffect`.
- Navegación utilizando React Router DOM.
- Consumo de APIs externas mediante Fetch.
- Organización modular de una aplicación.
- Construcción de interfaces utilizando Bootstrap.

## 📝 Estado del proyecto

El proyecto se encuentra en desarrollo y tiene como objetivo integrar diferentes ejercicios y funcionalidades de React en una sola aplicación.

Algunas secciones son demostraciones visuales y otras incorporan funcionalidades reales, como la consulta de personajes de Rick and Morty.

Las funcionalidades de autenticación, carrito de compras y procesamiento de pagos no están implementadas.

## 💖 Agradecimientos

Este proyecto fue desarrollado como parte del proceso de aprendizaje de React, aplicando conceptos de desarrollo frontend, componentes reutilizables, navegación, consumo de APIs y diseño de interfaces web.

**RETROKITS FC – EL FÚTBOL ES ETERNO.** ⚽