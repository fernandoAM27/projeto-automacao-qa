const { test } = require('../support')


const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD


test.beforeAll(() => {
    if (!adminEmail || !adminPassword) {
        throw new Error('Defina ADMIN_EMAIL e ADMIN_PASSWORD no arquivo .env')
    }
})

test('deve logar como administrador', async ({ page }) => {

    await page.login.submit(adminEmail, adminPassword)
    await page.login.isLoggedIn('Admin')
})

test('não deve logar com senha incorreta', async ({ page }) => {

    await page.login.submit(adminEmail, 'abc123')

    const message = 'Oops!Ocorreu um erro ao tentar efetuar o login. Por favor, verifique suas credenciais e tente novamente.'
    await page.toast.havenText(message)
})

test('não deve logar quando o email não é valido', async ({ page }) => {

    await page.login.submit('www.admin.com.br', 'abc123')
    await page.login.alertHaveText('Email incorreto')
})

test('não deve logar quando o email não é preenchido', async ({ page }) => {

    await page.login.submit('', 'abc123')
    await page.login.alertHaveText('Campo obrigatório')
})

test('não deve logar quando a senha não é preenchida', async ({ page }) => {

    await page.login.submit(adminEmail, '')
    await page.login.alertHaveText('Campo obrigatório')
})
