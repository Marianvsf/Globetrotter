<h1 align="center">✈️ Globetrotter - Frontend</h1>

<p align="center">
  <strong>Experiencia premium de reserva de viajes: moderna, minimalista y eficiente.</strong>
  <br />
  Una solución integral desarrollada con el ecosistema de Next.js para optimizar flujos de usuario complejos.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_13-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

---

## 🌟 Descripción General

**Globetrotter** es una aplicación web de alto rendimiento diseñada para transformar la reserva de viajes en un proceso fluido y visualmente cautivador. El proyecto demuestra el dominio de interfaces declarativas, gestión de estados complejos en formularios multi-paso y arquitectura de componentes reutilizables.

> [!TIP]
> **🚀 Ver Demo en Vivo:** [globetrotter-two-lac.vercel.app](https://globetrotter-two-lac.vercel.app/)

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito |
| :--- | :--- |
| **Next.js 13** | Framework principal con optimización de rutas y renderizado. |
| **TypeScript** | Desarrollo robusto con tipado estático para prevenir errores en tiempo de ejecución. |
| **Tailwind CSS** | Estilizado modular enfocado en responsividad y diseño "Mobile-First". |
| **Date-fns** | Gestión precisa de fechas y validaciones temporales. |
| **SweetAlert2** | Feedback de usuario elegante para confirmaciones y alertas. |
| **Tailwind Merge** | Optimización de clases dinámicas en componentes atómicos. |

---

## ✨ Flujo de Reserva (4 Pasos)

La aplicación orquestra un formulario dinámico dividido en etapas lógicas para maximizar la conversión del usuario:

1.  **Información del Viaje:** Selección de destino y fechas con validación cruzada. Los datos se consumen de una API externa (GitHub JSON).
2.  **Información del Viajero:** Gestión dinámica de formularios según el número de pasajeros (1-10) y lógica de cargos adicionales.
3.  **Servicios Adicionales:** Opciones de personalización como seguros, asientos y asistencia especial.
4.  **Confirmación:** Resumen detallado de costos y datos antes del envío final.

### 💰 Lógica de Costos Extra
| Servicio | Costo Unitario |
| :--- | :--- |
| Mascotas | $100 |
| Maletas Extra | $50 |

---

## 📂 Estructura y Arquitectura

El proyecto sigue el principio **DRY (Don't Repeat Yourself)** mediante la creación de una librería de componentes internos:

* **Atómicos:** `Button.tsx`, `Input.tsx`, `Switch.tsx`.
* **Moleculares:** `StepIndicator.tsx`, `TravelerCard.tsx`.
* **Organismos:** Componentes de paso (`StepOne`, `StepTwo`, etc.) que encapsulan su propia lógica de validación.

---

## 💻 Instalación y Uso Local

Asegúrate de tener instalado **Node.js** y un gestor de paquetes.

1. **Clonación:**
   ```bash
   git clone [https://github.com/Marianvsf/Globetrotter.git](https://github.com/Marianvsf/Globetrotter.git)
   cd globetrotter-frontend
