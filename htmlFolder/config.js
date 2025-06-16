const id = 2

fetch(`http://127.0.0.1:8000/Usuarios/${id}/`)
  .then(response => response.json())
  .then(user => {
    const nome = document.getElementById('nomeUser');
    const email = document.getElementById('MailUser');
    const foto = document.getElementById('ImgUser');

    nome.innerHTML = `
        <input type="text" class="form-control" id="nome" placeholder="Nome" value="${user.nome}">
    `;

    email.innerHTML = `
        <input type="text" class="form-control" id="email" placeholder="Email" value="${user.email}">
    `;

    foto.innerHTML = `

    `;


  })