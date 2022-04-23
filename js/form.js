const form = document.querySelector("#form-adiciona");
const button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", addPerson);

function addPerson(event){
    event.preventDefault();

    const person = makePaciente(form);

    if(person.nome.length == 0 || person.peso.length == 0 || person.altura.length == 0 || person.gordura.length == 0){
        alert("Please, provide a value to every field")
        return
    }

    adicionaPacienteNaTabela(person);
    form.reset();
}

function adicionaPacienteNaTabela(paciente) {
    const pacienteTr = makeTr(paciente, "paciente");
    const tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function makePaciente(form){
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: getImc(form.peso.value, form.altura.value)
    }
}

function makeTr(obj, docClass){
    const tr = document.createElement("tr");
    tr.classList.add(docClass);

    const trash = document.createElement("td");
    trash.classList.add("trash");
    const imgTrash = document.createElement("img");
    imgTrash.src = "img/trash-solid.svg";
    imgTrash.width = 10;
    trash.appendChild(imgTrash);

    tr.appendChild(makeTd(obj.nome, "info-nome"));
    tr.appendChild(makeTd(obj.peso, "info-peso"));
    tr.appendChild(makeTd(obj.altura, "info-altura"));
    tr.appendChild(makeTd(obj.gordura, "info-gordura"));
    
    if(obj.altura <= 0 || obj.peso <= 0){
        tr.appendChild(makeTd("invalid", "info-imc"));
        tr.classList.add("invalid-attribute")
    } else {
        tr.appendChild(makeTd(obj.imc, "info-imc"));
    }

    tr.appendChild(trash);
    
    return tr
}

function makeTd(param, docClass){
    const td = document.createElement("td")
    td.classList.add(docClass)
    td.textContent = param

    return td
}