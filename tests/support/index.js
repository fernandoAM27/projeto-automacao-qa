const { test: base } = require('@playwright/test')

const { Toast } = require('../pages/components')
const { LandingPage } = require('../pages/LandingPage')
const { LoginPage } = require('../pages/LoginPage')
const { MoviePage } = require('../pages/MoviePage')

const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            toast: new Toast(page),
            landing: new LandingPage(page),
            login: new LoginPage(page),
            movie: new MoviePage(page)
        })
    }
})

module.exports = { test }