const edadTp = (nombre, apellido, edad) => {
    if(edad <= 17){
        console.log(nombre, apellido, "Tienes menos de 18, sal de aqui")
    }else if (edad >= 18 && edad <= 59){
        console.log(nombre, apellido, "Pasa crack, eres adulto")
    }else if(edad >= 60){
        console.log(nombre, apellido, "Pasa pero ten cuidado ya tienes 60")
    }
}
console.log(edadTp("Raul", "Salazar", 60))