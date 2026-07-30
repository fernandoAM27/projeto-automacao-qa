const { test } = require('../support')

const data = require('../support/fixtures/movies.json')
const { executeSQL } = require('../support/database')

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD


test('deve poder cadastrar um novo filme', async ({ page }) => {
    const movies = data.create
    await executeSQL(`DELETE FROM public.movies WHERE title = '${movies.title}';`)

    await page.login.do(adminEmail, adminPassword, 'Admin')
    await page.movies.create(movies.title, movies.overview, movies.company, movies.release_year, movies.cover)
    await page.toast.havenText('Cadastro realizado com sucesso!')
})

test('não deve poder cadastrar quando os campos obrigatórios não forem preenchidos', async ({ page }) => {
    await page.login.do(adminEmail, adminPassword, 'Admin')

    await page.movies.goForm()
    await page.movies.submit()

    await page.movies.alertHaveText([
        'Por favor, informe o título.',
        'Por favor, informe a sinopse.',
        'Por favor, informe a empresa distribuidora.',
        'Por favor, informe o ano de lançamento.'
    ])
})
