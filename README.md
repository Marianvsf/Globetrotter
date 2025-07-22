# Globetrotter - Frontend

## 🚀 Descripción General
Globetrotter es una aplicación web diseñada para facilitar y personalizar la experiencia de reserva de viajes de una manera moderna, minimalista y visualmente atractiva. Este proyecto fue desarrollado con el objetivo de demostrar habilidades en Next.js, TypeScript y Tailwind CSS, así como el diseño, la estructura del código, la responsividad y la reutilización de componentes.

La aplicación guía al usuario a través de un proceso de reserva en cuatro pasos intuitivos, desde la información del viaje hasta la confirmación de la reserva.

## 🛠️ Tecnologías Utilizadas

Next.js (v13.2.2)  - Framework de React para el desarrollo de aplicaciones web full-stack.

React (v18.2.0)  - Librería de JavaScript para construir interfaces de usuario.

TypeScript - Lenguaje de programación que añade tipado estático a JavaScript, mejorando la robustez y el mantenimiento del código.

Tailwind CSS (v3.3.1) - Framework CSS utility-first para un diseño rápido y flexible.

date-fns (v2.29.3) - Librería de utilidades para trabajar con fechas en JavaScript.

sweetalert2 (v11.2.2) - Librería para alertas personalizables.

tailwind-merge (v0.3.1) - Utilidad para fusionar clases de Tailwind CSS de forma inteligente.

## ✨ Características Implementadas
La aplicación implementa un formulario de reserva de viajes en 4 pasos, siguiendo los requisitos definidos:

### Paso 1: Información del Viaje 

- Destino: Campo de entrada para el destino. 

- Fecha de salida: Selector de fecha para la fecha de inicio del viaje. 

- Fecha de regreso: Selector de fecha para la fecha de finalización del viaje. 

- Clase de vuelo: Selector para la clase de vuelo (e.g., Económica, Primera Clase). 

Nota: La información de precios y destinos se obtiene de una fuente externa 
https://raw.githubusercontent.com/Lstanislao/cities-permalink/main/flights.json 

### Paso 2: Información del Viajero 

- Número de viajeros: Entrada numérica con un stepper, permitiendo de 1 a 10 viajeros. 

- Datos de cada viajero: Por cada viajero, se solicitan el Nombre completo, Fecha de nacimiento y Documento de identidad (tipo y número). 

- Opcional - Viaje con mascotas: Switch para indicar si se viaja con mascotas, y un campo para la cantidad de mascotas si es "Sí" (costo: $100 c/u). 

- Opcional - Maletas extra: Switch para indicar si se necesitan maletas extra, y un campo para la cantidad si es "Sí" (costo: $50 c/u). 

### Paso 3: Servicios Adicionales 

- Seguro de viaje: Switch para agregar seguro de viaje. 

- Asientos preferenciales: Switch para seleccionar asientos preferenciales. 

- Asistencia especial: Switch para requerir asistencia especial, con un campo de texto para una nota breve (máximo 200 caracteres) si es "Sí". 

### Paso 4: Resumen y Confirmación 

- Resumen detallado: Muestra un resumen de toda la información ingresada, incluyendo destino, fechas, clase de vuelo, cantidad de viajeros y sus edades, cantidad de mascotas y maletas extra (si aplica), y los servicios adicionales seleccionados. 

- Botón "Confirmar Reserva": Al hacer clic, muestra un mensaje de éxito simulado ("¡Reserva confirmada!") sin requerir una comunicación real con un servidor. 

## 📂 Estructura del Proyecto
El proyecto sigue una estructura de Next.js convencional, con una organización modular para facilitar la escalabilidad y el mantenimiento.

## 💻 Cómo Ejecutar el Proyecto Localmente
Sigue estos pasos para levantar el proyecto en tu máquina local:

1. Clona el repositorio:

    git clone https://github.com/Marianvsf/Globetrotter.git

2. Navega al directorio del proyecto:

    cd globetrotter-frontend

3. Instala las dependencias:

    npm install # o yarn install

4. Inicia el servidor de desarrollo:

    npm run dev # o yarn dev

La aplicación estará disponible en http://localhost:3000.

## 🎨 Diseño y Responsividad
El diseño de Globetrotter se enfoca en un estilo moderno y minimalista, utilizando Tailwind CSS para una rápida prototipación y consistencia visual. Se ha puesto especial énfasis en la responsividad, asegurando que la interfaz sea totalmente funcional y estéticamente agradable en una variedad de tamaños de pantalla, desde dispositivos móviles pequeños hasta monitores de escritorio grandes.

## ♻️ Reutilización de Componentes
Se ha priorizado la creación de componentes reutilizables para mantener el código DRY (Don't Repeat Yourself) y mejorar la mantenibilidad. Ejemplos incluyen:

- Input.tsx y Textarea.tsx: Componentes base para campos de texto, estilizados con Tailwind CSS y capaces de aceptar atributos HTML nativos.

- Button.tsx: Componente genérico para botones con variantes predefinidas (e.g., primary, secondary).

- Componentes de formulario por pasos: Cada paso del formulario es un componente modular que gestiona su propia lógica y estado parcial, facilitando la adición o modificación de pasos en el futuro.

## ☁️ Despliegue
El proyecto ha sido desplegado con éxito en Vercel, aprovechando su integración nativa con Next.js para un proceso de despliegue continuo y eficiente. Puedes acceder a la aplicación en vivo a través de la siguiente URL:

https://globetrotter-two-lac.vercel.app/

Cada git push a la rama principal (generalmente main o develop) activa automáticamente un nuevo despliegue en Vercel.

## 🤝 Uso de Git
El control de versiones se ha gestionado con Git, utilizando un enfoque de ramas para el desarrollo y commits descriptivos para mantener un historial claro de los cambios.

<img width="1599" height="960" alt="image" src="https://github.com/user-attachments/assets/736cda83-92d4-4b1b-8cd9-2954e4c82723" />
<img alt="image" src="https://github.com/user-attachments/assets/faefcbb0-531d-4c9c-9e72-acf71691bcc9" />

