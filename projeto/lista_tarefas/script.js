const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const listaDeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
    let valorDoInput = tarefaInput.value;
    if (valorDoInput) {
        criarTarefa(valorDoInput);
        tarefaInput.value = "";
        tarefaInput.focus();
    } else {
        alert("Digite uma tarefa válida!");
        tarefaInput.focus();
    }
})

function criarTarefa(titulo) {
    const li = document.createElement("li");

    // Adicionar texto a uma tarefa
    const textoDaTarefa = document.createElement("span");
    textoDaTarefa.innerText = titulo;

    // Adicionar o Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {

        if (checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    })

    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "<strong>🗑</strong>"
    removeBtn.addEventListener("click", () => {
        listaDeTarefas.removeChild(li);
    });

    const divFlexLi = document.createElement("div");
    divFlexLi.append(checkbox);
    divFlexLi.append(textoDaTarefa);

    li.append(divFlexLi);
    li.append(removeBtn);
    listaDeTarefas.append(li);
}

tarefaInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        addBtn.click();
    }
})