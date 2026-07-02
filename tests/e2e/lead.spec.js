const { test, expect } = require('@playwright/test')
const { LandingPages } = require('../pages/LandingPages')
const { Toast } = require('../pages/components')
const { leads } = require('../fixtures/leads')

let landingPage
let toast

test.beforeEach(async ({ page }) => {
    landingPage = new LandingPages(page)
    toast = new Toast(page)
})

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const landingPages = new LandingPages(page)

    await landingPages.visit()
    await landingPages.openLeadModal()
    await landingPages.submitLeadForm( leads.valid.name , leads.valid.email)

    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
    await toast.havenText(message)
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