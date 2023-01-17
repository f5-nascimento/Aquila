
const handleSubmit = (event) => {

  event.preventDefault();

  const data = document.querySelector("input[name=Data]").value;
  const descricao = document.querySelector("input[name=Descrição]").value;
  const observação = document.querySelector("input[name=Observação]").value;
  const movimento = document.querySelector("input[name=Movimento]");
  const valor = document.querySelector("input[name=Valor]").value;
  const finalidade = document.querySelector("input[name=Finalidade]").value;

  fetch("", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: Data,
      descricao: Descrição,
      observação: Observação,
      movimento: movimento.options[movimento.selectedIndex].value,
      valor: valor,
      finalidade: Finalidade,
    }),
  }).then(() => alert("Enviado com sucesso"));

}

document.querySelector('form').addEventListener('submit', handleSubmit);