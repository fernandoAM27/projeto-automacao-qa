const { test: base } = require('@playwright/test')

const { Toast } = require('../pages/components')
const { LandingPage } = require('../pages/LandingPage')
const { LoginPage } = require('../pages/LoginPage')
const { MoviePage } = require('../pages/MoviePage')

const test = base.extend({
    page: async ({ page }, use) => {

        const context = page

        context.landing = new LandingPage(context)
        context.login = new LoginPage(context)
        context.movie = new MoviePage(context)
        context.toast = new Toast(context)

        await use(context)
    }
})

module.exports = { test }