// suite pour determiner le n-ieme nombre de la suite de fibonnaci
function fibonacci(n) {
    // Cas de base
    if (n < 0) {
        return "Veuillez entrer un nombre entier positif.";
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(15));


