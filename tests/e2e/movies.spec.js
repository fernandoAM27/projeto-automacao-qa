const { test } = require('@playwright/test')
const { Toast } = require('../pages/components')
const { LoginPage } = require('../pages/LoginPage')
const { MoviePage } = require('../pages/MoviePage')
const data = require('../support/fixtures/movies.json')

const adminEmail = process.env.ADMIN_EMAIL
const adminPassword = process.env.ADMIN_PASSWORD

let loginPage
let toast
let moviePage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    toast = new Toast(page)
    moviePage = new MoviePage(page)

    await loginPage.visit()
})

test('deve poder cadastrar um novo filme', async ({ page }) => {
    const movie = data.create

    await loginPage.submit(adminEmail, adminPassword)
    await moviePage.isLoggedIn()

    await moviePage.create(movie.title, movie.overview, movie.company, movie.release_year)
    await toast.havenText('Cadastro realizado com sucesso!')
})