const id = 2;
const formulario = document.getElementById('formUser');

fetch(`http://127.0.0.1:8000/Usuarios/${id}/`)
  .then(response => response.json())
  .then(user => {
    const nome = document.getElementById('nomeUser');
    const email = document.getElementById('MailUser');
    const foto = document.getElementById('ImgUser');

    nome.innerHTML = `
        <input id="nome1" type="text" class="form-control" placeholder="Nome" value="${user.nome}">
    `;

    email.innerHTML = `
        <input id="email1" type="text" class="form-control" placeholder="Email" value="${user.email}">
    `;

    foto.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${user.fotoPerfil}" class="rounded-circle" style="width: 100px; height: 100px;">
            <input id="foto1" type="file" class="form-control" style="max-width: 300px;">
        </div>
    `;
  });

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData();
  formData.append('nome', document.getElementById('nome1').value);
  formData.append('email', document.getElementById('email1').value);

  const fotoInput = document.getElementById('foto1');
  if (fotoInput.files.length > 0) {
    formData.append('fotoPerfil', fotoInput.files[0]);
  }

  fetch(`http://127.0.0.1:8000/Usuarios/${id}/`, {
    method: 'PATCH', // use PATCH se PUT der erro com FormData
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      alert("Usuário atualizado com sucesso!");
      console.log("Sucesso:", data);
      formulario.reset();
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
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