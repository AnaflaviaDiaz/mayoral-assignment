# Mayoral Frontend Assignment

## Challenge

|                                                      Desktop                                                      |                                                      Mobile                                                      |
| :---------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: |
| ![Desktop](https://user-images.githubusercontent.com/15807118/224440709-b8e2c6ac-f925-4721-859e-7b0a87cacddc.png) | ![Mobile](https://user-images.githubusercontent.com/15807118/224440889-27381c41-c912-49a1-8340-f507d91b33e3.png) |

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

- React
- Typescript
- Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto:
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

## Solución

**Este proyecto fue generado con _React_, _Next.js_, _Typescript_ y _Jest_**

## Pasos para ejecutar localmente la aplicación

1. Clonar proyecto
2. Instalar las dependencias del proyecto con el comando `npm install`
3. Arrancar el proyecto con el comando `npm run dev`
4. Abrir en el navegador la ruta `http://localhost:3000`

### Detalle de estructura de proyecto

- **Carpeta `components`**: Los componentes que serán reutilizables son:
  - `Select.tsx`: Se usó para ordenar el precio Ascendente o Descendente de la ropa.
  - `SearchInput.tsx`: Se usó para filtrar por texto la ropa.
  - `IncreaseDecreaseProducts.tsx`: Se usó para reducir y agrandar el tamaño de los cards de ropa.
  - `DiscountPrice.tsx`: Se usó para formatear el texto del precio con el porcentaje de descuento.
  - `CardClothes.tsx`: Se usó para mostrar los cards de ropa que contiene la imagen, titulo, precio, descuento, colores, etc.
  - En la carpeta `__test__` se realizó el testing de los componentes más relevantes.

![components-folder](https://user-images.githubusercontent.com/15807118/224445167-4a889420-5ee3-489c-8406-c5d93b61947c.png)

- **Carpeta `data`**: Las constantes como la lista de tipo de ordenamiento, tiempo de espera de inactividad en que el usuario deja de escribir en el filtro de búsqueda por texto, etc:

![data-folder](https://user-images.githubusercontent.com/15807118/224447243-9668ab7f-f4ff-4c14-88ba-8ef9cd17195e.png)

- **Carpeta `mock`**: Las constantes que se usan para mockear data en los tests:

![mock-folder](https://user-images.githubusercontent.com/15807118/224447491-379ff234-cc42-4726-aaab-2a972a0b757b.png)

- **Carpeta `models`**: Contiene las interfaces o props compartidas:

![models-folder](https://user-images.githubusercontent.com/15807118/224447692-418f1639-4230-4710-ab9d-58787cf7e332.png)

- **Carpeta `pages`**: `index.tsx` es el componente principal que engloba los components compartidos y renderizado previamente de la página utilizando el método `getStaticProps` que ofrece Next.js
  - En la carpeta `__test__` está el testing del archivo `index.tsx`.

![pages-folder](https://user-images.githubusercontent.com/15807118/224447862-6b85925e-9ad0-499a-9f91-8e5693b588c4.png)

- **Carpeta `styles`**: Contiene las variables globales en css:

![styles-folder](https://user-images.githubusercontent.com/15807118/224477651-ff1238df-10d0-4afd-8038-03c2b41351d9.png)

- **Carpeta `utils`**: Contiene funciones como:
  - *debounce*: que es para que no se ejecute una acción a menos que haya pasado el tiempo de la llamada, la utilizamos para cuando el usuario está escribiendo en el SearchInput component, esperamos 1 segundo que deje de escribir para realizar la búsqueda de lo solicitado.
  - *getClothesSortedInAscendingAndDescendingOrder*: que es para ordenar el precio de la ropa de forma ascendente o descendente.

![utils-folder](https://user-images.githubusercontent.com/15807118/224477721-e07d5256-784c-43ce-9451-6116526f381d.png)

## Ejecución de pruebas unitarias

- Ejecutar el comando `npm run test`

Se colocó los archivos de testing dentro de las carpetas `__test__`

## Descripción del entregable

Lo marcado en celeste, son los botones para agrandar o reducir el card de la ropa

Lo marcado en fucsia, es para ordenar de forma ascendente o descendente el precio de la ropa y por relevancia (order por nombre de ropa).

Lo marcado en verde, es el filtro para búsqueda por texto de la ropa.

![image](https://user-images.githubusercontent.com/15807118/224478409-8f4fcb00-1551-49d9-96cb-383ec0e57bca.png)
<!--

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
