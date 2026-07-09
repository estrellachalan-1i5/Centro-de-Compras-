# Fundamentos de Desarrollo Web

Este documento presenta una colección de ejemplos básicos para las tres principales tecnologías de la web, organizados en tablas con sus respectivos bloques de código.

## HTML

<table>
  <tr>
  
    <th>Código</th>
    <th>Explicación</th>
  </tr>
  <tr>
    <td>

```html
<h1>Hola Mundo</h1>
```

    </td>
    <td>Define un encabezado de primer nivel. Es la etiqueta utilizada generalmente para el título principal y más importante de una página web.</td>
  </tr>
  <tr>
    <td>

```html
<p>Este es un párrafo de ejemplo.</p>
```

    </td>
    <td>Define un párrafo. Se utiliza para estructurar y agrupar oraciones o bloques de texto legibles dentro de la página.</td>
  </tr>
  <tr>
    <td>

```html
<a href="https://github.com">Visitar GitHub</a>
```

    </td>
    <td>Crea un enlace o hipervínculo. El atributo <code>href</code> indica la dirección URL de destino a la que navegará el usuario al hacer clic en el texto.</td>
  </tr>
</table>

## CSS

<table>
  <tr>
    <th>Código</th>
    <th>Explicación</th>
  </tr>
  <tr>
    <td>

```css
body {
  background-color: #f4f4f4;
}
```

    </td>
    <td>Selecciona el cuerpo completo del documento (<code>body</code>) y le asigna un color de fondo gris claro utilizando un código hexadecimal.</td>
  </tr>
  <tr>
    <td>

```css
.destacado {
  color: blue;
  font-weight: bold;
}
```

    </td>
    <td>Aplica estilos a cualquier elemento que contenga la clase <code>destacado</code>. Cambia el color del texto a azul y pone la fuente en negrita.</td>
  </tr>
  <tr>
    <td>

```css
#boton-principal {
  border-radius: 8px;
  padding: 10px 20px;
}
```

    </td>
    <td>Selecciona de forma única el elemento con el identificador <code>boton-principal</code>, redondeando sus bordes y añadiendo espaciado interno (padding).</td>
  </tr>
</table>

## JavaScript

<table>
  <tr>
    <th>Código</th>
    <th>Explicación</th>
  </tr>
  <tr>
    <td>

```javascript
let mensaje = "¡Hola a todos!";
console.log(mensaje);
```

    </td>
    <td>Declara una variable llamada <code>mensaje</code> con una cadena de texto y luego imprime su valor en la consola del navegador, útil para depuración.</td>
  </tr>
  <tr>
    <td>

```javascript
function sumar(a, b) {
  return a + b;
}
```

    </td>
    <td>Declara una función reutilizable llamada <code>sumar</code> que acepta dos parámetros numéricos (<code>a</code> y <code>b</code>) y devuelve el resultado de sumarlos.</td>
  </tr>
  <tr>
    <td>

```javascript
const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
  alert("¡Se hizo clic!");
});
```

    </td>
    <td>Selecciona un elemento HTML por su identificador único ("btn") y le asocia un evento que muestra una ventana emergente cuando el usuario hace clic.</td>
  </tr>
</table>
