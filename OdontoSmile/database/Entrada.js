
/*
const baseURL = 'mongodb://localhost:27017/OdontoSmile'; 
const collectionName = 'Users'; 
*/

function EnviarDados() {
  const nome = document.getElementById('NOME').value;
  const cpf = document.getElementById('CPF').value;
  const contato = document.getElementById('CTT').value;
  const nascimento = document.getElementById('NIVER').value;
  const email = document.getElementById('E-Mail').value;
  const senha = document.getElementById('Senha').value;
  const uf = document.getElementById('Uf').value;

  const dadosUsuario = {
    nome,
    cpf,
    contato,
    nascimento,
    email,
    senha,
    uf
  };

  fetch('http://localhost:3000/adicionar-usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosUsuario),
  })
  .then(response => {
    if (response.ok) {
      console.log('Usuário adicionado com sucesso!');
      // Aqui você pode adicionar lógica para lidar com o sucesso, como redirecionar o usuário para outra página
    } else {
      throw new Error('Erro ao adicionar usuário');
    }
  })
  .catch(error => console.error('Erro:', error));
}

