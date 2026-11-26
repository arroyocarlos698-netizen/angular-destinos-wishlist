# Lista de destinos con Angular

Aplicación de una sola página desarrollada con Angular y TypeScript. Usa Bootstrap 4 para el diseño y permite agregar destinos a una lista reactiva.

## Ejecutar el proyecto

Requiere Node.js y npm.

```bash
npm ci
npm start
```

Abre `http://localhost:4200/` en el navegador. Para generar la compilación de producción:

```bash
npm run build
```

## Contenidos demostrados

- Bootstrap instalado como paquete npm y cargado globalmente desde `angular.json`.
- Componentes Angular con estilos Bootstrap e interpolación de datos de TypeScript.
- Lista de destinos basada en un array y renderizada con `*ngFor` dentro de elementos `<ul>` y `<li>`.
- `@HostBinding` para aplicar clases responsivas al componente de destino.
- Formulario HTML con referencias de plantilla (`#`) que llama a una función TypeScript para agregar destinos.

El formulario solicita el nombre y la URL de una imagen. La lista inicia con un destino de ejemplo.

## Créditos

El código de esta versión se preparó con asistencia de Codex a solicitud del estudiante.
