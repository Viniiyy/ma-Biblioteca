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
        <div style="display: flex; align-items: center; gap: 10px;">
            <img src="${user.fotoPerfil}" class="rounded-circle" style="width: 100px; height: 100px;">
            <input type="file" class="form-control" id="fotoPerfil" placeholder="Foto de Perfil" style="max-width: 300px;">
        </div>
    `;
  })

  formulario.addEventListener('submit',function(event){
    event.preventDefault();
    const formData = new FormData(formulario);
        formData.append('')
  })

