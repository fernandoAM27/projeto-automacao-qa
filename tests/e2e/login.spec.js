const { test, expect } = require('@playwright/test')
const { Toast } = require('../pages/components')
const { LoginPage } = require('../pages/LoginPage')
const { MoviePage } = require('../pages/MoviePage')

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD

let loginPage
let toast
let moviePage

test.beforeAll(() => {
    if (!adminEmail || !adminPassword) {
        throw new Error('Defina ADMIN_EMAIL e ADMIN_PASSWORD no arquivo .env')
    }
})

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    toast = new Toast(page)
    moviePage = new MoviePage(page)

    await loginPage.visit()
})

test('deve logar como administrador', async ({ page }) => {

    await loginPage.submit(adminEmail, adminPassword)
    await moviePage.isLoggedIn()
})

test('não deve logar com senha incorreta', async ({ page }) => {

    await loginPage.submit(adminEmail, 'abc123')

    const message = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
    await toast.havenText(message)
})

test('não deve logar quando o email não é valido', async ({ page }) => {

    await loginPage.submit('www.admin.com.br', 'abc123')
    await loginPage.alertHaveText('Email incorreto')
})

test('não deve logar quando o email não é preenchido', async ({ page }) => {

    await loginPage.submit('', 'abc123')
    await loginPage.alertHaveText('Campo obrigatório')
})

test('não deve logar quando a senha não é preenchida', async ({ page }) => {

    await loginPage.submit(adminEmail, '')
    await loginPage.alertHaveText('Campo obrigatório')
})
