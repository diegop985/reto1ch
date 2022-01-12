
alert("Bievenido al servicio de análisis de datos 😁👍")

let name = prompt("¿Cuál es tu nombre?")
let edad = parseInt(prompt("Cuál es tu edad?"))
let pais = prompt("¿De qué país eres?").toLowerCase()
let interesPeli = prompt("¿Te gustan las películas?").toLowerCase()
let interesLibro = prompt("¿Te gustan los libros?").toLowerCase()
alert("Gracias.\nProcesando . . .\nPlease type enter to continue . . .")

interesPeli == "si" ? interesPeli = true : interesPeli = false
interesLibro == "si" ? interesLibro = true : interesLibro = false


if (name.length<=3){
    alert(`Wow ${name} ¡Eres parte del club de nombres con 3 letras o menos!`)
}

if (pais=="colombia") {
    if(edad>=18){
        if(interesPeli== true){
            if(interesLibro==true){
                alert("Sabemos que como mayor de 18 años nacido en Colombia y con gustos hacía las películas y libros te gustaría este producto: \n>CLICK ACÁ<")
            } else {
                alert("Sabemos que como mayor de 18 años nacido en Colombia y con gusto a las películas y para nada hacía los libros; te gustaría este producto:\n>CLICK ACÁ<")
            }
        } else {
            alert("Sabemos que como mayor de 18 años nacido en Colombia y sin gusto por las películas y menos de los libros; te gustaría este producto:\n>CLICK ACÁ<")
        }
    } else {
        alert("Eres un Colombiano menor de 18 años, éticamente no te venderemos nada, chau.")
    }
} 


if(edad>=18 && pais=="argentina"){
    if(interesPeli==true || interesLibro==true) {
        alert("Sabemos que como mayor de 18 años nacido en Argentina y con gustos hacía las películas o libros, te gustaría este producto: \n>CLICK ACÁ<")
        } 
        
    } else if (pais=="argentina"&&edad<18){
    alert("Eres un Argentino menor de 18 años, éticamente no te venderemos nada, chau.")
}