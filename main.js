const formF = event=> {
    event.preventDefault()
    const formState = []
    const formatoMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    let name = document.getElementById("nombre")
    let apellido = document.getElementById("lastname")
    let edad = document.getElementById("age")
    let email = document.getElementById("email")
    let comments = document.getElementById("comments")
    let checkbox = document.getElementById("checkboxx")
    

    !name.value ? name.classList.add("error") :
    formState.push({ element: 'nombre', value: name.value}) && name.classList.remove('error')

    !apellido.value ? apellido.classList.add("error") :
    formState.push({ element: 'lastname', value: apellido.value}) && name.classList.remove("error")

    !edad.value ? edad.classList.add("error") :
    formState.push ({ element: 'age', value: edad.value}) && name.classList.remove("error")

    !email.value || !email.value.match(formatoMail) ? email.classList.add("error") :
    formState.push({ element: 'email', value: email.value}) && name.classList.remove("error")

    !comments.value ? comments.classList.add("error") :
    formState.push({ element: 'comments', value: comments.value}) && name.classList.remove("error")

    const dato = document.getElementById("formavalues")
    const html = formState.map(item => {
        let h2 = document.createElement('h2')
        h2.innerText = item.value
        return dato.appendChild(h2)

    })


    formState.length === 3 && (dato.innerHTML = JSON.stringify(html))

}

