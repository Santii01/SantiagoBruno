const tpedad = (nombre, apellido, edad) => {
    if(edad <= 17) {
        return console.log(nombre, apellido, "Eres menor de edad, sal de aqui")
    }else if(edad >= 18 && edad <= 59) {
       return console.log(nombre, apellido, "Eres mayor de edad, pasa con tranquilidad")
    }else if(edad >= 60) {
       return console.log(nombre, apellido, 'Ya tienes mas de 65, jubilate')
    }
}
console.log(tpedad('Santiago', 'Bruno', 18))