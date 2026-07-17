const { test, expect } = require('@playwright/test')
const { LandingPages } = require('../pages/LandingPages')
const { Toast } = require('../pages/components')
const { faker } = require('@faker-js/faker')

let landingPage
let toast

test.beforeEach(async ({ page }) => {
    landingPage = new LandingPages(page)
    toast = new Toast(page)
})

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const leadName = faker.person.fullName()
    const leadEmail = faker.internet.email()

    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm(leadName, leadEmail)

    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
    await toast.havenText(message)
});

test('não deve cadastrar quando o email ja existe', async ({ page , request }) => {
    const leadName = faker.person.fullName()
    const leadEmail = faker.internet.email()

    const newLead = await request.post('http://localhost:3333/leads', {
        data: {
            name: leadName,
            email: leadEmail
        }
    })

    expect(newLead.ok()).toBeTruthy()

    await landingPage.visit()
    await landingPage.openLeadModal()
    await landingPage.submitLeadForm(leadName, leadEmail)

    const message = 'O endereço de e-mail fornecido já está registrado em nossa fila de espera.'
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