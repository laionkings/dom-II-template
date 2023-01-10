function insereItem(event) {
    event.preventDefault()
    const input = document.getElementById("meu-input");
    const valor = input.value;
    const novoLi = document.createElement("li");
    novoLi.innerHTML = valor;
    const lista = document.getElementById("lista");
    lista.appendChild(novoLi);
    input.value = ""
}
 