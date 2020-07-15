let num = [5,6,7,8]
num [4] = 9//Acrescentar elementos ao array
//num.push(10)//coloca na última posição
num.length//quantidade de elementos
num.sort()//ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento é ${num[0]}`)

let pos = num.indexOf(6)//Saber a posição(chave) do elemento no vetor
console.log(`O número 6 está na posição ${pos}`)