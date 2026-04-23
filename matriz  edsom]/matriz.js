// 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda
 
console.log("\n criar matriz 2x2");


let numeros = [
    
    [1,2],

    [3,4]

] 
console.log(numeros);


// 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]


let matriz = [
    
    [5,6],

    [7,8]
]

console.log(`elemento da linha 1 coluna 2: ${matriz[0][1]}`);

// 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]


let matrizes = [
    
    [1,2,3],

    [4,5,6]
];

for(let i=0 ; i<matrizes.length;i++){
for(let j=0; j<matrizes[i].length;j++){
console.log(`elementos [${i}][${j}] = ${matrizes [i][j]}`);
}
}


// 44: Some todos os números da matriz [[2, 4], [6, 8]]


let matri = [
    
    [2,4],

    [6,8]
];
 let matri1 = 0;
for(let i=0 ; i<matri.length;i++){
    for(let j = 0;  j <matri[i].length; i++){

        matri1 = matri1 + matri [i] [j];

    }
}
console.log(`soma dos elementos ${matri1}`);

// 45: Crie uma matriz 3x3 com números de 1 a 9


let matris3x3 = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<matris3x3.length; i++){
    console.log(matris3x3[1]);

}

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]

let diag = [

    [1,2,3],

    [4,5,6],

    [7,8,9]

];
for(let i=0; i<diag.length;i++){
    console.log(diag[i][i]);
}
// 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10