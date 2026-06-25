const { test, expect } = require('@playwright/test')
const { LandingPages } = require('./pages/LandingPages')

let landingPage

test.beforeEach(async ({ page }) => {
    landingPage = new LandingPages(page)
})

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const landingPages = new LandingPages(page)

    await landingPages.visit()
    await landingPages.openLeadModal()
    await landingPages.submitLeadForm('Fernando Machado', 'fernandoarraismachado@yahoo.com.br')

    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
    await landingPages.toastHavenText(message)
});

test('Casos de erro de e-mail', async ({ page }) => {
    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm('Fernando Machado', 'fernandoarraismachado.com')
    await landingPage.alertHaveText('Email incorreto')

});

test('Casos de validação do nome', async ({ page }) => {
    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm('', 'fernandoarraismachado@yahoo.com.br')
    await landingPage.alertHaveText('Campo obrigatório')
});

test('Casos de validação do e-mail', async ({ page }) => {
    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm('Fernando Machado', '')
    await landingPage.alertHaveText('Campo obrigatório')
});

test('Casos de validação nenhum campo preenchido', async ({ page }) => {
    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm('', '')
    await landingPage.alertHaveText(['Campo obrigatório', 'Campo obrigatório'])
});