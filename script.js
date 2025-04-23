
function buscarCEP() {
  const cep = document.getElementById('cep').value;
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('resultado').innerText = data.logradouro + ", " + data.bairro;
    });
}
function somar() {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  document.getElementById('soma').innerText = "Resultado: " + (n1 + n2);
}
