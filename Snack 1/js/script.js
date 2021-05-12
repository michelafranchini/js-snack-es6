// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var biciclette = [
    {
        nome: "Bici Enduro", 
        peso: 30
    }, 
    {
        nome: "Bici da Velodromo", 
        peso: 18
    }, 
    {
        nome: "Bici da passeggiata", 
        peso: 22
    }, 
    {
        nome: "Mountanbike", 
        peso: 27
    }, 
    {
        nome: "Bici da strada", 
        peso: 33
    }
]; 

console.log(biciclette);

var biciLeggera = biciclette[0]; 

for (var i = 0; i < biciclette.length; i++) {

    if (biciclette[i].peso < biciLeggera.peso) {

        biciLeggera = biciclette[i]; 
    }
 
}

// console.log("La bici più leggera è: " , biciLeggera);

var {nome, peso} = biciLeggera; 
var biciPiuLeggera = document.getElementById("risultato"); 

biciPiuLeggera.innerHTML = `${nome} è la bicicletta più leggera con ${peso} kg`; 


