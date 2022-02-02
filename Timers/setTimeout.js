// setTimeout rodar uma função depois de x milissgundo 
const timeOut = 3000
const finished = () => console.log('done!')

setTimeout(finished, timeOut)
console.log("Mostrar o Assícronismo!")
//Execute e veja o assícronismo 