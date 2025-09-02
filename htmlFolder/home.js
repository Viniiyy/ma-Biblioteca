let filter = JSON.parse(localStorage.getItem('filter')) || []
let lista = JSON.parse(localStorage.getItem('lista')) || []

fetch('http://127.0.0.1:8000/Categorias/')
    .then(response => response.json())
    .then(categoria => {
        const fil = document.getElementById('filter');
        categoria.forEach(categoria => {
            const cat = document.createElement('div'); // trocado de 'cat' para 'div'
            cat.className = 'cat';
            cat.innerHTML = `
                <button onclick="filtroC(${categoria.id})" class="btn m-md-1" style="background-color: #223146; color: white" type="button">
                    ${categoria.categoria}
                </button>
            `;
            fil.appendChild(cat); // agora está certo
        });
    })
    .catch(error => {
        console.error('Erro ao buscar da API:', error);
    });


    
fetch('http://127.0.0.1:8000/Livros/')
    .then(response => response.json())
    .then(livros =>{
        const cardlivros = document.getElementById('pagebody');
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
                
            `
            cardlivros.appendChild(card)
        })
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



function filtroC(id){
    window.location.href = `homeFil.html?id=${id}`
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