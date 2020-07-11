var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 1 && hora < 6) {
    console.log('Bom madrugada!')
} else if (hora >= 6 && hora < 12) {
    console.log('Boa bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
