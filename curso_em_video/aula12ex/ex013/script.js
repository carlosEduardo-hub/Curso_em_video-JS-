function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. </br>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += "BOM DIA!"
        img.src = "manhã.jpg"
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += "BOA TARDE!"
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    } else {
        msg.innerHTML += "BOA NOITE!"
        img.src = "noite.jpg"
        document.body.style.background = "#515154"
    }
}
