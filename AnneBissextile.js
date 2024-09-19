// fonction pouir determiner si une anne est bissextile ou non 
function bissextile(x){
    if ((x%4 === 0) || (x%400 === 0)){
        return `l'annee ${x} est bissextile` ;
    }

    else {
        return `l'annee ${x} n'est pas  bissextile` ;
    }
}

console.log(bissextile(1945));
console.log(bissextile(2015));
console.log(bissextile(3567));
console.log(bissextile(1000));
console.log(bissextile(4030));
console.log(bissextile(2000));