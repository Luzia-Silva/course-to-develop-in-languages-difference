const timeOut = 3000
const finished = () => console.log('done!')

let time = setTimeout(finished, timeOut)
clearTimeout(time)//ele simplesmente cancela o setTimeout 
//Não aparece nada no terminal