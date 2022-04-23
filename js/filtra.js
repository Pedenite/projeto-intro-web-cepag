const campoFiltro = document.getElementById("filtrar-tabela")

campoFiltro.addEventListener("input", function(){
    const pacientes = document.querySelectorAll(".paciente")
    const valor = this.value // this.value won't work inside foreach
    if(this.value.length > 0){
        pacientes.forEach(function(paciente){
            const nome = paciente.querySelector(".info-nome").textContent
            const regex = new RegExp(valor, "i") // i stands for case insensitive
            if(regex.test(nome)){
                paciente.classList.remove("invisivel")
            } else {
                paciente.classList.add("invisivel")
            }
        })
    } else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel")
        })
    }
})