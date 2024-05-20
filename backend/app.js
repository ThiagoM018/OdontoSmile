const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Importe o módulo cors

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors

app.use(bodyParser.json());

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/OdontoSmile', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definição do esquema do modelo (supondo que você tenha um modelo de Usuário)
const UsuarioSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  cpf: Number,
  contato: Number,
  email: String,
  senha: String,
  uf: String,
});

// Definir o modelo com o esquema criado
const Usuario = mongoose.model('Users', UsuarioSchema, 'Users'); // Substitua 'NomeDaSuaColecao' pelo nome da coleção

// Rota para receber dados do front-end e inserir no MongoDB
app.post('/adicionar-usuario', async (req, res) => {
  try {
    const { nome, idade, cpf, contato, email, senha, uf } = req.body;

    // Criar um novo usuário com os dados recebidos
    const novoUsuario = new Usuario({ nome, idade, cpf, contato, email, senha, uf });
    
    // Salvar o novo usuário no banco de dados
    await novoUsuario.save();

    res.status(201).send('Usuário adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    res.status(500).send('Erro ao adicionar usuário');
  }
});

// Rota para autenticação de login
app.post('/loginEmp', async (req, res) => {
  try {
    const { Cnpj, Senha } = req.body;

    // Procurar a empresa na coleção de Empresas pelo CNPJ e senha
    const empresa = await Empresa.findOne({ Cnpj, Senha });

    if (empresa) {
      // Se encontrou a empresa, o login foi bem-sucedido
      res.status(200).send('Login realizado com sucesso!');
    } else {
      // Se não encontrou a empresa, o login falhou
      res.status(401).send('Credenciais inválidas');
    }
  } catch (error) {
    console.error('Erro ao autenticar login:', error);
    res.status(500).send('Erro ao autenticar login');
  }
});


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
