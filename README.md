# CCL Inventory Management System - Frontend

Esta es la aplicación frontend para el sistema de gestión de inventario CCL, construida con Angular 19 (Standalone Components).

## Prerrequisitos

- Node.js (v18+)
- Angular CLI (v19)
- API Backend ejecutándose localmente en el puerto 5024

## Configuración y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar la aplicación

```bash
ng serve
```

### 3. Acceder a la aplicación

Navega a:

http://localhost:4200

Inicia sesión con las credenciales por defecto:

- **Usuario:** admin  
- **Contraseña:** admin123  

---

## Características de la Arquitectura

- **Standalone Components:** Sin necesidad de NgModules.
- **Interceptors funcionales:** Adjuntan automáticamente el token JWT Bearer a las peticiones API.
- **Guards de rutas funcionales:** Protegen la ruta `/inventory` contra accesos no autorizados.
- **Reactive Forms:** Usados para formularios seguros y validados (Login y Movimientos).

---

## Comandos de Git

```bash
git add README.md
git commit -m "docs: agregar instrucciones de configuración del frontend y lista de características"
```

---

Con esto listo, solo debes ejecutar `ng serve` en tu terminal, ingresar a `http://localhost:4200` y verás tu sistema funcionando completamente, conectado al backend en tiempo real.