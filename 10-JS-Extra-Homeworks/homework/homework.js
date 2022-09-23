// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
  for (var propiedad in objeto){
   
    matriz.push([propiedad, objeto[propiedad]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var num = {};
  for(var i=0;i < string.length; i++){
    if(string[i] in num){
      num [string[i]]++;
    }
   else {
    num[string[i]]= 1;
  }
  
}
return num;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusc = "";
  var minusc = "";
  for (var i=0; i< s.length; i++){
    if(s[i]=== s[i].toUpperCase()){
      mayusc += s[i];
    } else {
      minusc += s[i];

    }
  }
  return mayusc + minusc;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase = str;
 // console.log(frase);

  var fraseporpalabra = frase.split(" ");
  //console.log (fraseporpalabra);

  var fraseAdevolver = [];

  for(var i=0; i<fraseporpalabra.length; i++){
   
    fraseAdevolver.push(fraseporpalabra[i].split("").reverse().join(""))

  }
  //console.log(fraseAdevolver);
  return fraseAdevolver.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var nuevonumero = numero.toString();
  var espejo = "";
  for (var i =nuevonumero.length-1; i >= 0; i--){
    espejo += nuevonumero[i];
  }
  if(nuevonumero === espejo){
    return "Es capicua";
  }
  return "No es capicua";

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevacadena = "";
  for (var letra of cadena){
    if( letra !== "a" && letra !== "b" && letra !== "c" ){
      nuevacadena += letra;
    }
  }
  return nuevacadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){
     return a.length - b.length
  });
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var nuevoarray = [];
  for(var e of arreglo1){
    for (var i of arreglo2){
      if (e === i){
        nuevoarray.push(e);
      }

    }
  }
  return nuevoarray;
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

