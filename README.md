# Projeto de Automação de Testes - ZombiePlus

Projeto de estudos para automação de testes E2E da aplicação ZombiePlus, desenvolvido com Playwright e JavaScript.

## Tecnologias

- JavaScript
- Node.js
- Playwright Test
- Faker
- dotenv

## Cenários automatizados

### Leads

- Cadastro de lead na fila de espera
- Tentativa de cadastro com e-mail já existente
- Validação de e-mail inválido
- Validação de campos obrigatórios

### Login administrativo

- Login com credenciais válidas
- Tentativa de login com senha incorreta
- Validação de e-mail inválido
- Validação de campos obrigatórios

### Filmes

- Login administrativo
- Cadastro de um novo filme

## Estrutura do projeto

```text
tests/
├── e2e/                 # Especificações dos testes
├── pages/               # Page Objects e componentes compartilhados
└── support/fixtures/    # Massas de dados dos testes
```

## Pré-requisitos

- Node.js 20 ou superior
- Aplicação web ZombiePlus disponível em `http://localhost:3000`
- API ZombiePlus disponível em `http://localhost:3333`

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

Instale o navegador usado pelo Playwright:

```bash
npx playwright install chromium
```

## Variáveis de ambiente

Crie o arquivo local `.env` a partir do modelo:

```powershell
Copy-Item .env.example .env
```

Preencha as credenciais administrativas no `.env`:

```dotenv
ADMIN_EMAIL=seu-email-administrativo
ADMIN_PASSWORD=sua-senha-administrativa
```

O arquivo `.env` é ignorado pelo Git e não deve ser versionado.

## Execução dos testes

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

## Relatório

Após a execução, abra o relatório HTML com:

```bash
npm run report
```

Em caso de falha, o projeto também pode preservar screenshots, vídeos e traces para auxiliar no diagnóstico.

## Segurança

- Não versione o arquivo `.env`.
- Use somente credenciais de ambiente de teste.
- Caso uma credencial real seja exposta no histórico do Git, altere-a imediatamente.
