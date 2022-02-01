//saida padrão do process
// stdout - stander 
// o console.log() -> usa o proces.stdout.write para exibir na nossa tela o text 
//e um \n -> new line para pulas linha
// process.stdout.write("Alguma coisa \n\n\n");

const questions = [
    "O que aprendi hoje?", 
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?", 
    "Quantas pessoas ajudei hoje?"   
]

const ask =(index = 0) => {
    process.stdout.write("\n\n\n" + questions[index] + ">") 
    //Saída padrão do processo, estamos escrevendo o que está no array  
}
//trim() remove os espaços
console.log("Questionário sobre BestMe")
ask()
const answer = []
process.stdin.on("data", data => {
    answer.push(data.toString().trim())
        if(answer.length < questions.length){ ask(answer.length)}
        else{process.exit();}
})
//callback: significa chamar de volta; 
//process.on: faz verificação de eventos;
process.on('exit', () => {
   
    console.log(`
    Bacana Luzia! 

    O que você aprendeu foi:
    ${answer[0]}
    \n
    O que te aborreceu e você poderia melhorar: 
    ${answer[1]}
    \n
    O que te deixou feliz hoje:
    ${answer[2]}
    \n
    Você ajudou  pessoas hoje!!
    ${answer[3]}
    \n
    Volte amanhã para novas reflexões!!
    `)

})