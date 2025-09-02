const formulario = document.getElementById('formLivro');
const msg = document.getElementById('msg');
const select = document.getElementById('selct-categoria');
const id = new URLSearchParams(window.location.search).get('id');


fetch('http://127.0.0.1:8000/Categorias/')
    .then(response => response.json())
    .then(categoria => {

        categoria.sort((a, b) => a.categoria.localeCompare(b.categoria));

        select.innerHTML = '<option select disable> Selecione uma categoria </option>';

        categoria.forEach(categoria => {
            const option = document.createElement('option');
            option.value = categoria.id;
            option.textContent = categoria.categoria;
            select.appendChild(option);
        });
    })
    .catch(error => {
        select.innerHTML = '<option value="">Erro ao carregar categorias</option>';
    });

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const formData = new FormData();
        formData.append('titulo', document.getElementById('nlivro').value);
        formData.append('descricao', document.getElementById('descricao').value);
        formData.append('dataEntrada', document.getElementById('data').value);
        formData.append('imagem', document.getElementById('imagem').files[0]); // <- Aqui está o arquivo
        formData.append('categoria', document.getElementById('selct-categoria').value);
        formData.append('situacao', document.getElementById('situacao').value);

    fetch(`http://127.0.0.1:8000/Livros/${id}/`, {
        method: 'PUT',
        body: formData
    })

    .then(response => response.json())
    .then(data => {
        alert("Livro adicionado com sucesso!");
        console.log("Sucesso:", data);
        msg.textContent = "Livro adicionado com sucesso!";
        formulario.reset();
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        msg.textContent = "Erro ao adicionar livro";
    });
})

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