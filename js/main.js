const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const weight = pacientes[i].querySelector(".info-peso").textContent;
    const height = pacientes[i].querySelector(".info-altura").textContent;

    const imc = pacientes[i].querySelector(".info-imc");
    if (height == 0) {
        imc.textContent = "invalid";
        //pacientes[i].style.backgroundColor = "darkred";
        pacientes[i].classList.add("invalid-attribute"); // melhor manter style no css
    } else {
        imc.textContent = getImc(weight, height)
    }
}

function getImc(w, h) {
    return (w / h ** 2).toFixed(2);
}