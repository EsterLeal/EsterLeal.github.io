const container = document.querySelector('#items-adicionar')
fetch('http://localhost:3000')
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    data.forEach(licao => {
      console.log(licao)

      const mediaItem = document.createElement('div');
      mediaItem.setAttribute('class', 'media mb-4');
      mediaItem.innerHTML = `
            <img src="${atividade.imagem}" alt="${atividade.nome}" class="mr-3 img-thumbnail" width="200px">
            <div class="media-body>
                <h5 class="mt-0"><strong>${atividade.nome}</strong></h5>
                ${atividade.descricao}
              </div>`

      container.appendChild(mediaItem);

      const botaozin = document.createElement("button")
      botaozin.textContent = " ✖ ";
      botaozin.setAttribute("class", "btn btn-warning")
      botaozin.setAttribute("data-id", atividade._id)
      mediaItem.appendChild(botaozin)

      botaozin.addEventListener("click", () => {
        fetch(
          `http://localhost:3000/atividades/${atividade._id}`,
          {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then((response) => {
          console.log(response)
          if (response.status === 204) {
            window.location.reload()
          } else {
            window.alert("Deu erro ao deletar, sorry")
          }
        })
      })
    })
  })
  .catch((erro) => {
    console.log(erro)
  })

const botao = document.querySelector('#criar_atividade_button')
botao.addEventListener("click", criarComida)

function criarAtividade() {
  const nome = document.querySelector("#nome_input").value
  const descricao = document.querySelector("#descricao_input").value
  const imagem = document.querySelector("#imagem_input").value
  const atividade = {
    nome, descricao, imagem
  }
  fetch(
    'http://localhost:3000/atividades',
    {
      method: 'POST',
      body: JSON.stringify(atividade),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => console.log("criou!"))
}