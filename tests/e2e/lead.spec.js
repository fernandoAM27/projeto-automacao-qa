const { test } = require('../support')
const { expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker')
const { leads } = require('../support/fixtures/leads')

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    const leadName = faker.person.fullName()
    const leadEmail = faker.internet.email()

    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm(leadName, leadEmail)

    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'
    await page.toast.havenText(message)
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

    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm(leadName, leadEmail)

    const message = 'O endereço de e-mail fornecido já está registrado em nossa fila de espera.'
    await page.toast.havenText(message)
});

test('Casos de erro de e-mail', async ({ page }) => {
    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm('Fernando Machado', 'fernandoarraismachado.com')
    await page.landing.alertHaveText('Email incorreto')

});

test('Casos de validação do nome', async ({ page }) => {
    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm('', 'fernando.qa@example.com')
    await page.landing.alertHaveText('Campo obrigatório')
});

test('Casos de validação do e-mail', async ({ page }) => {
    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm('Fernando Machado', '')
    await page.landing.alertHaveText('Campo obrigatório')
});

test('Casos de validação nenhum campo preenchido', async ({ page }) => {
    await page.landing.visit()
    await page.landing.openLeadModal()
    await page.landing.submitLeadForm('', '')
    await page.landing.alertHaveText(['Campo obrigatório', 'Campo obrigatório'])
});