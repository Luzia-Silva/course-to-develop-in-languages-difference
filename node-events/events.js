const {EventEmitter} = require('events')
//ele é uma função que do modulo event

const ev = new EventEmitter()


//ev,on -> ele escuta os eventos -> Oq escutar, oq ele vai fazer
ev.on('saySomething', (message) => {
    console.log('Eu escuto você até ouvir!', message)
})

//ev.once -> ele escuta 1 vez só 
ev.once('saySomething', (message) =>{
    console.log('Eu escuto uma vez só filha!', message)
})
ev.emit('saySomething', "Luzia") //emitir um evento -> emit
ev.emit('saySomething', "Lucas")

