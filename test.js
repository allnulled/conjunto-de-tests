const path = require("path");
const conjunto_de_tests = require(path.resolve(__dirname, "index.js"));

const { subtest, iniciar } = conjunto_de_tests("Test de ejemplo");

subtest("Test uno", function() {
    return new Promise((ok, fail) => {
        setTimeout(ok, 1000);
    });
});

subtest("Test dos", function () {
    return new Promise((ok, fail) => {
        setTimeout(ok, 1000);
    });
});

subtest("Test tres", function () {
    return new Promise((ok, fail) => {
        setTimeout(ok, 1000);
    });
});

subtest("Test cuatro", function () {
    return new Promise((ok, fail) => {
        setTimeout(ok, 1000);
    });
});

subtest("Test cinco", function () {
    return new Promise((ok, fail) => {
        setTimeout(ok, 1000);
    });
});

iniciar().then(() => {
    console.log("Tests finalizados.");
});