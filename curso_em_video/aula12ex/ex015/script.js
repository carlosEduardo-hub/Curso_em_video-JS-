function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        alert('[ERRO]Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bbh.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemh.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultoh.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bbm.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultam.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.padding = '8px'
        res.appendChild(img)
        
    }
}