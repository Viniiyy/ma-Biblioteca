const params = new URLSearchParams(window.location.search);
const Id = params.get('id');
const form = document.getElementById('formulario');
const msg = document.getElementById('msg');

fetch(`http://127.0.0.1:8000/Livros/${Id}/`)
  .then(response => response.json())
  .then(livro => {
    const l1 = document.getElementById('carInside');
    l1.innerHTML = `
        <img src="${livro.imagem}" class="d-block align-items-center object-fit-cover" style="object-fit: contain; max-height: 300px;" alt="Imagem do livro"> 
    `;

    const l2 = document.getElementById('nameBook');
    l2.innerHTML = `
      <h1 class="text-start text-light m-3">${livro.titulo}</h1>
    `;
    const l3 = document.getElementById('descri');
    l3.innerHTML = `
        <p class="text-break " style="font-size: 3ch;">${livro.descricao}</p>
      `;
  })
  .catch(error => console.error('Erro ao buscar o livro:', error));




form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData();
    formData.append('livro', Id);
    formData.append('usuario', 2);
    formData.append('data_emprestimo', document.getElementById('dataEmprestimo').value);
    formData.append('data_devolucao', document.getElementById('dataDevolucao').value);

  fetch('http://127.0.0.1:8000/Emprestimos/', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log("Sucesso:", data);
    msg.textContent = "Empréstimo reservado com sucesso!";
    form.reset();
  })
  .catch(error => {
    console.error('Erro ao enviar os dados:', error);
    msg.textContent = "Erro ao adicionar empréstimo";
  });
});

function pesquisarLivros(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const termo = document.getElementById('barraPesquisa').value.toLowerCase();
    const cards = document.querySelectorAll('#pagebody .card');

    cards.forEach(card => {
        const titulo = card.querySelector('.card-text').textContent.toLowerCase();

        if (titulo.includes(termo)) {
            card.parentElement.style.display = ''; // mostra
        } else {
            card.parentElement.style.display = 'none'; // esconde
        }
    });
}

function home(){
  window.location.href = "homeS.html";
}

function perfil(){
  window.location.href = "perfil.html";
}

function listaL(){
  window.location.href = "ListBook.html";
}

function addL(){
  window.location.href = "adicionar.html";
}

function config(){
    window.location.href = "config.html";
}