const params = new URLSearchParams(window.location.search);
const Id = params.get('id');

fetch(`http://127.0.0.1:8000/Categorias/${Id}/livros/`)
    .then(response => response.json())
    .then(livros => {
        const cardLivro = document.getElementById('pagebody');

        livros.forEach(livro => {
            const card = document.createElement('div');
            card.className = 'col-auto';
            card.innerHTML = `

            <div onclick="paginaL(${livro.id})" class="card rounded-5 text-center h-100 d-flex flex-column" style="width: 13rem">
                <img src="${livro.imagem}" class="card-img-top rounded-top-5"  aLt="...">
                <div class="card-body rounded-bottom-5" style="background-color: #223146;">    
                    <p class="card-text backgo text-white">
                        ${livro.titulo}
                    </p>
                </div>
            </div>
        `;
        cardLivro.appendChild(card);
    });
  })
  .catch(error => {
        console.error('Erro ao buscar livros:', error);
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

function paginaL(id){
    window.location.href = `emprestimo.html?id=${id}`
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