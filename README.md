# ZombiePlus - Automação de Testes com Playwright

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Projeto de estudos para automação de testes E2E da aplicação ZombiePlus, desenvolvido com Playwright e JavaScript.

## Objetivos

- Praticar automação E2E com Playwright;
- Estruturar testes com Page Object Model;
- Criar cenários positivos e negativos;
- Validar mensagens de sucesso, erro e campos obrigatórios;
- Gerar dados dinâmicos com Faker;
- Preparar massa de teste por API;
- Produzir evidências com relatório, screenshots, vídeos e traces.

## Tecnologias

- JavaScript
- Node.js
- Playwright Test
- Faker
- dotenv
- Git e GitHub

## Cenários automatizados

### Leads

- Cadastro de lead na fila de espera;
- Tentativa de cadastro com e-mail já existente;
- Validação de e-mail inválido;
- Validação de campos obrigatórios.

### Login administrativo

- Login com credenciais válidas;
- Tentativa de login com senha incorreta;
- Validação de e-mail inválido;
- Validação de campos obrigatórios.

### Filmes

- Login administrativo;
- Cadastro de um novo filme.

## Estrutura do projeto

```text
tests/
├── e2e/
│   ├── lead.spec.js
│   ├── login.spec.js
│   └── movies.spec.js
├── pages/
│   ├── components.js
│   ├── LandingPage.js
│   ├── LoginPage.js
│   └── MoviePage.js
└── support/
    └── fixtures/
        ├── leads.js
        └── movies.json
```

- `tests/e2e`: especificações dos testes;
- `tests/pages`: Page Objects e componentes compartilhados;
- `tests/support/fixtures`: massas de dados;
- `playwright.config.js`: configuração de execução do Playwright.

## Pré-requisitos

- Node.js 20 ou superior;
- npm;
- Git;
- Aplicação web ZombiePlus em `http://localhost:3000`;
- API ZombiePlus em `http://localhost:3333`.

As aplicações web e API não fazem parte deste repositório. Inicie cada uma em seu próprio diretório:

```bash
npm run dev
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/fernandoAM27/projeto-automacao-qa.git
cd projeto-automacao-qa
```

Instale as dependências:

```bash
npm ci
```

Instale o Chromium usado nos testes:

```bash
npx playwright install chromium
```

## Variáveis de ambiente

Crie o arquivo local `.env` a partir do modelo:

```powershell
Copy-Item .env.example .env
```

Preencha as credenciais administrativas:

```dotenv
ADMIN_EMAIL=seu-email-administrativo
ADMIN_PASSWORD=sua-senha-administrativa
```

O arquivo `.env` é ignorado pelo Git e não deve ser versionado.

## Execução

Execute todos os testes:

```bash
npm test
```

Execute com o navegador visível:

```bash
npm run test:headed
```

Abra o modo interativo do Playwright:

```bash
npm run test:ui
```

Execute somente uma suíte:

```bash
npx playwright test tests/e2e/login.spec.js
npx playwright test tests/e2e/lead.spec.js
npx playwright test tests/e2e/movies.spec.js
```

## Relatório e evidências

Abra o relatório HTML após a execução:

```bash
npm run report
```

Em caso de falha, o projeto pode preservar screenshots, vídeos e traces para auxiliar no diagnóstico.

## Boas práticas aplicadas

- Separação dos testes por fluxo funcional;
- Page Object Model para organizar as ações das páginas;
- Componentização de mensagens Toast;
- Dados dinâmicos com Faker;
- Preparação de massa por API;
- Credenciais fornecidas por variáveis de ambiente;
- Arquivos de autenticação, relatórios e credenciais fora do Git.

## Segurança

- Não versione o arquivo `.env`;
- Use somente credenciais de ambiente de teste;
- Caso uma credencial real seja exposta no histórico do Git, altere-a imediatamente.

## Status

Projeto em evolução. Melhorias futuras incluem ampliar a cobertura, refinar as massas de teste e preparar a execução em CI quando web, API e banco estiverem disponíveis no ambiente remoto.

## Autor

Fernando Arrais Machado

- [LinkedIn](https://www.linkedin.com/in/fernandoqa)
- [GitHub](https://github.com/fernandoAM27)
