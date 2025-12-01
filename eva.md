

# Programación y Plataformas Web

# Evaluación Práctica – Angular, Formularios, Navegación y Consumo de APIs

## Autores

**Pablo Torres**
Docente – Carrera de Computación

Universidad Politécnica Salesiana

[ptorresp@ups.edu.ec](mailto:ptorresp@ups.edu.ec)

GitHub: [PabloT18](https://github.com/PabloT18)

---

# Evaluación Práctica: Aplicación Angular con Login Simulado y Consumo de API

## Introducción

La presente evaluación integra los contenidos desarrollados en las prácticas de Angular, abarcando instalación, fundamentos, navegación, formularios reactivos, consumo de servicios HTTP, uso de directivas modernas y estilos con TailwindCSS.
El objetivo es construir una aplicación funcional que combine autenticación simulada, consumo de datos externos y presentación visual adecuada mediante componentes y estilos modernos.

---

# Objetivos de la Evaluación

1. Aplicar conceptos de arquitectura y estructura en Angular mediante un proyecto organizado con componentes, páginas y servicios.
2. Implementar formularios reactivos con validaciones y clases auxiliares.
3. Realizar navegación mediante rutas y parámetros dinámicos.
4. Consumir servicios externos utilizando `HttpClient` y `rxResource`.
5. Presentar información de forma estructurada y accesible, incorporando estilos con TailwindCSS y DaisyUI (opcional).
6. Generar una experiencia visual clara mediante componentes semánticos y buenas prácticas de UI.
7. Desplegar correctamente la aplicación en GitHub Pages.

---

# Requerimientos del Proyecto

La aplicación deberá contener tres páginas principales:

## Requerimientos técnicos:

* Uso obligatorio de formularios reactivos.
* Uso de la clase `FormUtils`.
* Directivas modernas: `@if`, `@for`.
* Estructura semántica: `<section>`, `<article>`, `<header>`, `<form>`.
* Estilo con TailwindCSS y componentes DaisyUI opcionales.

---

# 1. Página de Inicio de Sesión

Archivo sugerido: `login-page.ts`

### Funcionalidades

1. Formulario reactivo con los campos:

   * `email`
   * `password`

2. Validaciones obligatorias:

   * Email con formato válido.
   * Password con mínimo 6 caracteres.

3. Datos de acceso quemados en código:

   ```ts
   const USER = {
     email: 'usuario@ups.edu.ec',
     password: '123456'
   };
   ```

4. La autenticación no es real, solo compara valores del formulario con los valores quemados.

5. Acciones:

   * Si los datos son correctos: navegar a `/home`.
   * Si los datos son incorrectos: mostrar mensaje de error.


---



# 2. Página Home

Archivo sugerido: `home-page.ts`

## Consumo de API

Utilizar la API:

```
https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
```

## Requerimientos

La página deberá realizar el consumo usando:

* `HttpClient`
* `rxResource`

## Datos a mostrar

1. **Número total de registros (`count`)**
2. **Listado de Pokémon** obtenidos en `results`
3. Cada Pokémon debe visualizarse dentro de un listado semántico, con:

   * Nombre
   * Botón o enlace “Ver detalles”

## Navegación

Al hacer clic sobre un Pokémon, el sistema deberá navegar a la página de detalles utilizando:

```
/pokemon/:id
```

## Paginación obligatoria

La página deberá implementar un sistema para pasar a la siguiente página de resultados.

Específicamente:

* El botón “Siguiente” debe actualizar los parámetros `offset` y `limit` para consumir los siguientes **20 registros**.
* Puede utilizarse la propiedad `next` de la API o el cálculo manual del nuevo `offset`.
* El consumo de la nueva página también debe realizarse mediante `rxResource`.
* El listado deberá actualizarse dinámicamente al cambiar de página.

Ejemplo de siguiente página:

```
https://pokeapi.co/api/v2/pokemon?offset=40&limit=20
```

(O según el valor que obtengas del `next`.)

## Vista esperada

* Un componente tipo **hero** que muestre el total de registros.
* Un listado responsivo con `@for`, estructurado semánticamente mediante `<section>`, `<ul>`, `<li>`, `<article>`.
* Controles para avanzar a la siguiente página y  retroceder.
* Actualización visual fluida usando señales o el propio estado de `rxResource`.


> Puden usar el componente de paginación o crearse señales propias para manejar el estado de la página actual.
---




# 3. Página de Detalles del Pokémon

Archivo sugerido: `pokemon-detail-page.ts`

### Consumo de API

El detalle se obtiene desde la URL que viene en `results` o usando directamente la forma:

```
https://pokeapi.co/api/v2/pokemon/{id}
```

### Deberá mostrarse:

1. Imagen principal (sprites `front_default`)
2. Nombre
3. Tipos
4. Altura y peso
5. Al menos tres características adicionales:

   * Experiencia base
   * Número de movimientos
   * Estadísticas principales
   * Si tiene habilidades ocultas
   * Orden dentro del juego

### Indicaciones para presentación:

* Usar estructura semántica `<article>` `<header>` `<figure>` `<section>`
* Aplicar TailwindCSS para diseño limpio
* Presentación clara y ordenada
* Navegación de regreso a `/home`

---

# Requerimientos Técnicos Globales

1. Proyecto Angular ≥ versión 20
2. Uso de:

   * Componentes standalone
   * Routing
   * rxResource
   * Servicios con HttpClient
3. Formularios reactivos
4. Validaciones coherentes
5. Directivas:

   * `@if`
   * `@for`
6. TailwindCSS configurado y en uso
7. Buenas prácticas de interfaz:

   * Jerarquías visuales
   * Espaciados
   * Tipografía adecuada
   * Contraste correcto
8. Código organizado por carpetas minima:

   * `auth/`
   * `pokemon/`
   * `pokemon/services/`
9. Despliegue en GitHub Pages completamente funcional.

---

# Entregables

Los estudiantes deben entregar:

1. **Repositorio en GitHub** con:

   * Código fuente organizado
   * TailwindCSS configurado
   * Servicio para consumo de API
   * Rutas y navegación implementadas

2. **Enlaces entregados en AVAC**:

   * Enlace al repositorio
   * Enlace a la página desplegada en GitHub Pages


3. **Estructura mínima del repositorio**:

```
src/
  app/
    auth/
      login-page/
    pokemon/
      pages/
         home-page/
         pokemon-detail-page/
      services/
         pokemon.service.ts
```

---

# Criterios de Evaluación


| Criterio                                                                        | Puntaje      | 0 % (No logrado)                                                                               | 50 % (Parcialmente logrado)                                                                                                           | 100 % (Logrado completamente)                                                                                                                      |
| ------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Login reactivo con validaciones y uso de señales**                         | **1 punto**  | No funciona el login; no hay validaciones; el formulario no es reactivo; no se usan señales.   | El login funciona parcialmente; validaciones incompletas; señales usadas solo en una parte mínima; rutas no se activan correctamente. | Login totalmente funcional; validaciones correctas; formulario reactivo; señales aplicadas adecuadamente; navegación al Home al autenticar.        |
| **2. Navegación y rutas dinámicas**                                             | **1 punto**  | No existe navegación o las rutas fallan; no se implementa `/pokemon/:id`.                      | Navegación parcial; rutas básicas funcionando, pero la ruta dinámica presenta fallas o datos incompletos.                             | Navegación completa entre login, home y detalle; uso correcto de rutas dinámicas con parámetros; navegación fluida.                                |
| **3. Consumo de API con rxResource y servicio con 2 métodos (lista + detalle)** | **2 puntos** | No consume la API o no usa rxResource; el servicio no implementa métodos para lista y detalle. | Consume parcialmente; uno de los métodos del servicio funciona; rxResource usado de forma incompleta o incorrecta.                    | Servicio correcto con métodos para listado y detalle; consumo 100 % con rxResource; manejo correcto de estados (loading, error, value).            |
| **4. Home con listado, paginación y hero**                                      | **2 puntos** | No muestra el listado ni la cantidad total; no existe paginación; el hero no está presente.    | Muestra el listado básico pero sin paginación o hero incompleto; paginación con fallas; estructura semántica parcial.                 | Home completo con hero mostrando el total; listado con `@for`; paginación funcional (anterior/siguiente) usando señales; diseño semántico y claro. |
| **5. Página de detalle del Pokémon**                                            | **2 puntos** | Página vacía o sin consumo real; no muestra datos requeridos; no se navega correctamente.      | Muestra datos mínimos pero faltan elementos obligatorios u opcionales; fallas en estructura o consumo.                                | Página completa con imagen, nombre, tipos y tres características adicionales; estructura semántica clara y navegación correcta.                    |
| **6. Estilos, semántica global y estructura de carpetas**                       | **1 punto**  | No utiliza Tailwind; estructura desordenada; sin semántica; carpetas incorrectas.              | Uso parcial de estilos o estructura aceptable pero incompleta; semántica mínima.                                                      | Uso correcto de Tailwind; páginas semánticas; estructura organizada por módulos y componentes; interfaz clara y ordenada.                          |
| **7. Despliegue en GitHub Pages**                                               | **1 punto**  | El proyecto no está desplegado o no funciona.                                                  | El proyecto está desplegado pero presenta errores, rutas incorrectas o contenido incompleto.                                          | Despliegue funcional y limpio en GitHub Pages; navegación y recursos funcionando correctamente.                                                    |

---

# Total: **10 puntos**
