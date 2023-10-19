function Empresa(nome) {
    this.nome = nome;
}

function Pessoa(nome, cargo, salario, idade, HardSkills, SoftSkills) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    this.idade = idade;
    this.HardSkills = HardSkills;
    this.SoftSkills = SoftSkills;
}

function Vendedor(nome, salario, idade, HardSkills, SoftSkills, especialização) {
    Pessoa.call(this, nome, "Vendedor", salario, idade, HardSkills, SoftSkills);
    this.especialização = especialização;
}

function TI(nome, salario, idade, HardSkills, SoftSkills, especialização) {
    Pessoa.call(this, nome, "Analista de TI", salario, idade, HardSkills, SoftSkills);
    this.especialização = especialização;
}

function RH(nome, salario, idade, HardSkills, SoftSkills, especialização) {
    Pessoa.call(this, nome, "Recursos Humanos", salario, idade, HardSkills, SoftSkills);
    this.especialização = especialização;
}



const empresa2 = new Empresa("Arigatô Tec.");
const pessoa2 = new Pessoa("Brenda", "Gerente", 17000, 34, "Competência em Técnologia da Informação, Liderança, Análise de Dados, Gerenciamento de Projetos.",  
"Empatia, Criatividade, Paciência, Inteligência Emocional.");
const vendedor = new Vendedor("Ludmila", 7000, 40, "Vendas, Liderança", "Comunicação, tomada de Decisão", ["Eletrônicos, Eletroportáteis, Smartphones"]);
const analista = new TI("Roger", 11000, 26, "Inteligencia Artificial, Raciocínio Analítico, Manejo de dados na Nuvem", "Criatividade, Persuasão, adaptabilidade, Manejo ", ["AWS, Azure, Google Cloud"]);
const recursosHumanos = new RH("Emanuele", 15500, 45, "proeficiência em Idiomas, Gestão de Pessoas, Operação de Sistemas,Getão de projetos, ", "Paciência, Motivação, Flexibilidade, Comunicação", ["Secullum, RHiD, TopData, Excel"]);



console.log(empresa2);
console.log(pessoa2);
console.log(vendedor);
console.log(analista);
console.log(recursosHumanos);
