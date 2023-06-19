const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMediaNota(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    },0);
    const media = somaDasNotas / notasDaSala.length;
    
    return media;
}

// function calculaMediaTeste(notasDeOutraSala){
//     let soma = 0;
//     for(let i = 0; i < notasDeOutraSala.length; i++){
//         soma += notasDeOutraSala[i];        
//     }
//     const media = soma / notasDeOutraSala.length;
    
//      return media;
//  }



console.log(`A média da sala de JS é: ${calculaMediaNota(salaJS)}`);
console.log(`A média da sala de Java é: ${calculaMediaNota(salaJava)}`);
console.log(`A média da sala de Python é: ${calculaMediaNota(salaPython)}`);
