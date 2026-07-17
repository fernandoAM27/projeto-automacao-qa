# ZombiePlus - Automação de Testes com Playwright

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
