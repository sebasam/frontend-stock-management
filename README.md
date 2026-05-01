# CCL Inventory Management System - Frontend

This is the frontend application for the CCL Inventory Management System, built with Angular 19 (Standalone Components).

## Prerequisites

- Node.js (v18+)
- Angular CLI (v19)
- Backend API running locally on port 5024

## Setup and Execution

### 1. Install dependencies

```bash
npm install
```

### 2. Run the application

```bash
ng serve
```

### 3. Access the application

Navigate to:

http://localhost:4200

Log in using the default credentials:

- **User:** admin  
- **Password:** admin123  

---

## Architecture Features

- **Standalone Components:** Zero NgModule overhead.
- **Functional Interceptors:** Automatically attaches the JWT Bearer token to API requests.
- **Functional Route Guards:** Protects the `/inventory` route from unauthorized access.
- **Reactive Forms:** Used for secure and validated Login and Movement forms.

---

## Run tests

```bash
ng test
```

---

With this done, just run `ng serve` in your terminal, go to `http://localhost:4200`, and you will see your system fully working, connected to the backend in real time.