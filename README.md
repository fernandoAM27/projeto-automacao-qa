# ZombiePlus - Automação de Testes com Playwright

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Projeto de automação de testes E2E desenvolvido com **Playwright** e **JavaScript**, utilizando a aplicação **ZombiePlus** como base de estudo.

O objetivo do projeto é praticar automação de testes em cenários próximos ao dia a dia de QA, validando fluxos de cadastro de leads, login administrativo, mensagens de erro, regras de validação e comportamento da aplicação.

---

## Objetivo do projeto

Este projeto foi desenvolvido com foco em:

- Praticar automação E2E com Playwright;
- Estruturar testes utilizando Page Object Model;
- Criar cenários positivos e negativos;
- Validar mensagens de sucesso e erro;
- Utilizar dados dinâmicos nos testes;
- Apoiar a preparação de massa via API;
- Gerar evidências de execução, como relatório, screenshots, vídeos e traces;
- Evoluir boas práticas de organização e manutenção de testes automatizados.

---

## Tecnologias utilizadas

- JavaScript
- Node.js
- Playwright
- Faker.js
- Git/GitHub

---

## Cenários automatizados

### Cadastro de leads

- Deve cadastrar um lead na fila de espera com sucesso;
- Não deve cadastrar um lead quando o e-mail já existe;
- Não deve cadastrar lead com e-mail inválido;
- Não deve cadastrar lead sem preencher o nome;
- Não deve cadastrar lead sem preencher o e-mail;
- Não deve cadastrar lead quando nenhum campo é preenchido.

### Login administrativo

- Deve realizar login como administrador;
- Não deve realizar login com senha incorreta;
- Não deve realizar login com e-mail inválido;
- Não deve realizar login sem preencher o e-mail;
- Não deve realizar login sem preencher a senha.

---

## Estrutura do projeto

```bash
zombieplus/
├── tests/
│   ├── e2e/
│   │   ├── lead.spec.js
│   │   └── login.spec.js
│   ├── fixtures/
│   │   └── leads.js
│   └── pages/
│       ├── Components.js
│       ├── LandingPages.js
│       ├── LoginPage.js
│       └── MoviePage.js
├── playwright.config.js
├── package.json
└── README.md
```

### Principais pastas

- `tests/e2e`: arquivos de testes automatizados.
- `tests/pages`: Page Objects e componentes reutilizáveis.
- `tests/fixtures`: dados utilizados nos testes.
- `playwright.config.js`: configuração do Playwright.
- `playwright-report`: relatório HTML gerado após a execução dos testes.

---

## Boas práticas aplicadas

- Separação dos testes por fluxo funcional;
- Uso de Page Object Model para organizar ações das páginas;
- Componentização de elementos reutilizáveis, como mensagens Toast;
- Uso de dados dinâmicos com Faker;
- Validação de cenários positivos e negativos;
- Preparação de massa via API para cenário de lead duplicado;
- Configuração de relatório HTML do Playwright;
- Captura de screenshot, vídeo e trace em cenários de falha.

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js;
- npm;
- Git.

Também é necessário que a aplicação ZombiePlus esteja disponível localmente nos endereços esperados pelo projeto:

- Front-end: `http://localhost:3000`
- API: `http://localhost:3333`

---

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/fernandoAM27/projeto-automacao-qa.git
```

Acesse a pasta do projeto:

```bash
cd projeto-automacao-qa
```

Instale as dependências:

```bash
npm install
```

Instale os browsers do Playwright:

```bash
npx playwright install
```

---

## Como executar os testes

Executar todos os testes em modo headless:

```bash
npm test
```

Executar os testes com o navegador visível:

```bash
npm run test:headed
```

Executar os testes pela interface do Playwright:

```bash
npm run test:ui
```

Abrir o relatório HTML após a execução:

```bash
npm run report
```

---

## Evidências de execução

O projeto está configurado para gerar evidências em caso de falha, incluindo:

- Screenshots;
- Vídeos;
- Traces;
- Relatório HTML do Playwright.

Essas evidências ajudam na análise de falhas e facilitam a investigação do comportamento da aplicação durante os testes.

---

## Status do projeto

Projeto em evolução.

Próximas melhorias planejadas:

- Padronizar a nomenclatura dos Page Objects;
- Melhorar a organização dos dados de teste;
- Evoluir a estrutura dos cenários;
- Ajustar pipeline de execução com GitHub Actions;
- Expandir cobertura de testes;
- Melhorar a documentação técnica do projeto.

---

## Autor

Fernando Arrais Machado

- LinkedIn: https://www.linkedin.com/in/fernandoqa
- GitHub: https://github.com/fernandoAM27
