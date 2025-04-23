
function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}

async function buscarCEP() {
    const cep = document.getElementById("cepInput").value.replace(/\D/g, '');
    const resultado = document.getElementById("cepResultado");
    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro) {
                resultado.textContent = "CEP não encontrado.";
            } else {
                resultado.textContent = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
            }
        } catch (error) {
            resultado.textContent = "Erro ao buscar o CEP.";
        }
    } else {
        resultado.textContent = "Digite um CEP válido com 8 dígitos.";
    }
}
