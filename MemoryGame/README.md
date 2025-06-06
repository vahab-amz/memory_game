# Memory Game - React + Vite

Este es un juego de memoria clásico hecho con **React** y **Vite**. El objetivo es encontrar todas las parejas de cartas iguales con el menor número de turnos posible.

## Características

- Hecho con React y Vite para recarga rápida y desarrollo moderno.
- Lógica de juego sencilla y fácil de entender.
- Estilos personalizados con CSS.
- Contador de turnos.
- Botón para reiniciar el juego.

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <URL-del-repo>
   cd memory_game/MemoryGame
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

```
MemoryGame/
├── public/
│   └── img/           # Imágenes de las cartas y portada
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── README.md