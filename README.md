# conjunto-de-tests

Utilidad rápida para crear subtests.

## Instalación

```sh
npm install conjunto-de-tests
```

## Uso

```js
const conjunto_de_tests = require("conjunto-de-tests");

const { subtest, iniciar } = conjunto_de_tests("nombre del conjunto", {
    debuga: false,
    interrumpe: false
});

subtest("Nombre del test", async function() {

});

subtest("Nombre del test", async function() {

});

subtest("Nombre del test", async function() {

});

await iniciar();

console.log("Tests completados aquí");
```

## ¿Por qué?

Para complementar a `mocha` y realizar subtests dentro de un `it(...)`. Tiene cosas muy raras mocha, muchas cosas van muy bien, pero esta concretamente no. Permite `describe` dentro de `describe` pero no `it` dentro de `it`. Seguro tienen alguna razón.

