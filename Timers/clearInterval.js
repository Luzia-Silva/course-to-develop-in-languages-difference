const timeOut = 1000
const finished = () => console.log('done!')

let interval = setInterval(finished, timeOut);

setTimeout( () => clearInterval(interval), 4000)
//setTimeout vai verificar se o interval chega ao time decido, assim que ele chegar ele para o setinterval