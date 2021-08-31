let edad = prompt("¿Cual es tu edad?"); 
let munfronterizo = confirm ("¿Vives en un municipio fronterizo al norte del país?"); 
let embarazado = confirm ("¿Estás embarazada?"); 
if (embarazado == true) {
    let semanasGestacion = prompt("¿Cuantas semanas de gestación?"); 
}

if (edad >= 18 && munfronterizo == true) { 
    console.log("Candidato vacuna 1")
} else if ( embarazado == true && edad >= 18 && semanasGestacion > 9 ){
    console.log("Candidato vacuna 2")
} else if ( edad >= 29){
    console.log("Candidato vacuna 3")
} else {
    console.log("No eres candidato vacuna")
}