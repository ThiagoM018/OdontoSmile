const pessoa1 = {
    nome : 'Thiago Estevao',
    cpf : 51641102888,
    nasc : '12/04/2004',
    ctt : 81998094884,
    email : 'thiagoestevao217@gmail.com',
    senha : '98903142'
}

const container = document.getElementById('containerLog');


function cliente() {

    container.id = "containerLog1";

    container.innerHTML = "";

    const textI = document.createElement("h3");
    textI.innerHTML = "Acesso Cliente";

    container.appendChild(textI);

    const div1 = document.createElement("div");
    div1.classList.add("form-group");
    const lb1 = document.createElement("label");
    const inpt1 = document.createElement("input");
    inpt1.id = 'CPF';
    lb1.textContent = "Usuário";
    inpt1.placeholder = "CPF";

    div1.appendChild(lb1);
    div1.appendChild(inpt1);

    const div2 = document.createElement("div");
    div2.classList.add("form-group");
    const lb2 = document.createElement("label");
    const inpt2 = document.createElement("input");
    inpt2.id = 'SENHA';
    lb2.textContent = "Senha de Acesso";
    inpt2.placeholder = "Senha";

    div2.appendChild(lb2);
    div2.appendChild(inpt2);

    container.appendChild(div1);
    container.appendChild(div2);

    const acessar = document.createElement("button");
    acessar.classList.add("acessarCli")
    acessar.textContent = "Acessar";
    acessar.onclick = validar;

    container.appendChild(acessar);

    const voltar = document.createElement("a");
    voltar.href = location;
    const voltarC = document.createElement("h4");
    voltarC.textContent = "Voltar";

    voltar.appendChild(voltarC);
    container.appendChild(voltar);

    const esquecerS = document.createElement("a");
    const esquecerSP = document.createElement("span");
    esquecerSP.textContent = "esqueceu a senha?";
    esquecerS.classList.add("esquecerS");

    esquecerS.appendChild(esquecerSP);
    container.appendChild(esquecerS);

    const criarAcc = document.createElement("a");
    criarAcc.href = "../html/cadastro.html";
    const criarAccS = document.createElement("span");
    criarAccS.textContent = "Criar conta";
    criarAcc.classList.add("criarAcc");

    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    criarAcc.appendChild(criarAccS);
    container.appendChild(criarAcc);
    
}

function empresa(){

    container.id = "containerLog1";

    container.innerHTML = "";

    const textI = document.createElement("h3");
    textI.innerHTML = "Acesso Empresa";

    container.appendChild(textI);

    const div1 = document.createElement("div");
    div1.classList.add("form-group");
    const lb1 = document.createElement("label");
    const inpt1 = document.createElement("input");
    inpt1.id = "Cnpj";
    lb1.textContent = "Usuário";
    inpt1.placeholder = "CNPJ";

    div1.appendChild(lb1);
    div1.appendChild(inpt1);

    const div2 = document.createElement("div");
    div2.classList.add("form-group");
    const lb2 = document.createElement("label");
    const inpt2 = document.createElement("input");
    lb2.textContent = "Funcionário";
    inpt2.placeholder = "ID";

    div2.appendChild(lb2);
    div2.appendChild(inpt2);

    container.appendChild(div1);
    container.appendChild(div2);

    const div3 = document.createElement("div");
    div3.classList.add("form-group");
    const lb3 = document.createElement("label");
    const inpt3 = document.createElement("input");
    inpt3.id = "Senha";
    lb3.textContent = "Senha";
    inpt3.placeholder = "Senha";

    div3.appendChild(lb3);
    div3.appendChild(inpt3);

    container.appendChild(div3);

    const acessar = document.createElement("button");
    acessar.classList.add("acessarEmp");
    acessar.onclick = LogEmp;
    acessar.textContent = "Acessar";

    container.appendChild(acessar);

    const voltar = document.createElement("a");
    voltar.href = location;
    const voltarC = document.createElement("h4");
    voltarC.textContent = "Voltar";

    voltar.appendChild(voltarC);
    container.appendChild(voltar);

    const esquecerS = document.createElement("a");
    const esquecerSP = document.createElement("span");
    esquecerSP.textContent = "esqueceu a senha?";
    esquecerS.classList.add("esquecerS");

    esquecerS.appendChild(esquecerSP);
    container.appendChild(esquecerS);

    

}

function validar() {
    const userN = parseInt((document.getElementById('CPF').value));
    const userS = (document.getElementById('SENHA').value);

    if (userN === pessoa1.cpf){
        if (userS === pessoa1.senha){
            agendar();
        }
        else {
            alert('Senha incorreta!')
        }
    }
    else {
        alert('Usuario incorreto!');
    }
}

function agendar() {
    container.id = 'containerLog1';

    container.innerHTML = '';

    const textI = document.createElement("h3");
    textI.textContent = 'Agendamento';

    container.appendChild(textI);

    const div1 = document.createElement("div");
    div1.classList.add('form-group');
    const lb1 = document.createElement("label");
    lb1.textContent = 'Clinica:';
    lb1.classList.add('fw-bold');
    const select1 = document.createElement("select");

    const cidades = [
        'Aldeia-Camaragibe',
        'Jardim P-Camaragibe',
        'Sao lourenço',
        'Peixinhos-Olinda',
        'Joana B-Recife',
        'Casa Amarela-Recife',
        'Jaboatao dos Guararapes'
    ];
    
    cidades.forEach(cidade => {
        const option = document.createElement("option");
        option.value = cidade; 
        option.text = cidade; 
        select1.appendChild(option); 
    });

    div1.appendChild(lb1);
    div1.appendChild(select1);

    container.appendChild(div1);

    const div3 = document.createElement("div");
    div3.classList.add('form-group');
    const lb3 = document.createElement("label");
    lb3.textContent = 'Selecione a data:';

    
    const select3 = document.createElement("select");

    const datas = [
        '08/12',
        '09/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12'
    ];
    
    datas.forEach(datas => {
        const option = document.createElement("option");
        option.value = datas; 
        option.text = datas; 
        select3.appendChild(option); 
    });

    div3.appendChild(lb3);
    div3.appendChild(select3);

    container.appendChild(div3);

    const br = document.createElement("br");
    container.appendChild(br);

    const div2 = document.createElement("div");
    div2.classList.add('form-group');
    const lb2 = document.createElement("label");
    lb2.textContent = 'horario:';
    lb2.classList.add('fw-bold');
    const select2 = document.createElement("select");

    for (let hora = 8; hora <= 12; hora++) {
        for (let minuto = 0; minuto < 60; minuto += 30) {
            const option = document.createElement("option");
            const horaFormatada = hora.toString().padStart(2, '0'); 
            const minutoFormatado = minuto.toString().padStart(2, '0'); 
            const horario = `${horaFormatada}:${minutoFormatado}`;
            option.value = horario; 
            option.text = horario; 
            select2.appendChild(option); 
        }
    }
    
    div2.appendChild(lb2);
    div2.appendChild(select2);

    container.appendChild(div2);

    const br2 = document.createElement("br");
    container.appendChild(br2);

    const acessar = document.createElement("button");
    acessar.classList.add("acessarCli")
    acessar.textContent = "Agendar";
    acessar.onclick = confirmaçaoAgendamento;
    //acessar.onclick = validar;

    container.appendChild(acessar);

    const voltar = document.createElement("a");
    voltar.href = location;
    const voltarC = document.createElement("h4");
    voltarC.textContent = "Voltar";

    voltar.appendChild(voltarC);
    container.appendChild(voltar);


    console.log('Voce logou!');
}

function confirmaçaoAgendamento() {
    container.innerHTML = '';

    const divConfirm = document.createElement("div");
    divConfirm.classList.add('msgEnv');
    const h2 = document.createElement("h3");
    h2.classList.add('fw-bold');
    h2.textContent = 'Agendamento Enviado';
    const textCenv = document.createElement("p");
    textCenv.classList.add('fw-bold');
    textCenv.textContent = 'Seu agendamento ja foi solicitado, fique de olho no email para a confirmaçao da consulta!'

    divConfirm.appendChild(h2);
    divConfirm.appendChild(textCenv);

    container.appendChild(divConfirm);

    const acessar = document.createElement("button");
    acessar.classList.add("Voltar")
    acessar.textContent = "Voltar";
    acessar.onclick = function () {
        window.location.replace("../html/index.html");
    }

    container.appendChild(acessar);
}

/*async function LogEmp() {
    const cpf = document.getElementById('Cnpj').value;
    const senha = document.getElementById('Senha').value;
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cpf, senha }),
    };
  
    try {
      const response = await fetch('http://localhost:3000/loginEmp', requestOptions);
      if (response.ok) {
        window.location.replace("../html/empresa.html");
      } else {
        alert('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      alert('Erro ao realizar login');
    }
  }*/

function LogEmp(){
    window.location.replace("../html/empresa.html");
}