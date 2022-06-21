// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
// gli elementi della lista individualmente con un ciclo while.
// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


const listaSpesa = [`Carne`, `Pesce`, `Latte`, `Uova`, `Sale`];
console.log(listaSpesa);

const contenitoreLista = document.getElementById(`container-list`);
console.log(contenitoreLista);

let index = 0;
while (index < listaSpesa.length) {
    // console.log(listaSpesa[index]);
    const elementoSpesa = document.createElement(`li`);
    elementoSpesa.innerText = listaSpesa[index];
    contenitoreLista.append(elementoSpesa);
    index++;
};

//  for (let i=0; i < listaSpesa.length; i++){
//      const elementoSpesa = document.createElement(`li`);
//      elementoSpesa.innerHTML = listaSpesa[i];
//      contenitoreLista.append(elementoSpesa);
//  }
