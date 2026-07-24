const { test } = require('../support')

const data = require('../support/fixtures/movies.json')
const { executeSQL } = require('../support/database')

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD


test('deve poder cadastrar um novo filme', async ({ page }) => {
    const movie = data.create
    await executeSQL(`DELETE FROM public.movies WHERE title = '${movie.title}';`)

    await page.login.submit(adminEmail, adminPassword)
    await page.movie.isLoggedIn()

    await page.movie.create(movie.title, movie.overview, movie.company, movie.release_year)
    await page.toast.havenText('Cadastro realizado com sucesso!')
}) 