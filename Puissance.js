function puissance(x, n) {
    
    if (n === 0) {
        return 1;
    } 
    
    else if (n < 0) {
        return 1 / puissance(x, -n);
    } 
    
    else {
        

        return x * puissance(x, n - 1);
    }
}

console.log(puissance(3, 5));

