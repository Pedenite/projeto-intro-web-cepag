const pTable = document.querySelector("#tabela-pacientes")

pTable.addEventListener("click", (event) => {
    let alvoReal
    if (event.target.classList.contains("trash")) {
        alvoReal = event.target.parentNode;
    } else if (event.target.parentNode.classList.contains("trash")) {
        alvoReal = event.target.parentNode.parentNode;
    } else {
        return;
    }

    alvoReal.classList.add("fadeOut")
    setTimeout(() => {
        alvoReal.remove()
    }, 500)
})

// pacientes.forEach(function (paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove()
//     })
// }) // nao funciona para novos valores e não é a melhor opção

