const { test: base, expect  } = require('@playwright/test')

const { Toast } = require('./actions/components')
const { Leads } = require('./actions/Leads')
const { Login } = require('./actions/Login')
const { Movies } = require('./actions/Movies')

const test = base.extend({
    page: async ({ page }, use) => {

        const context = page

        context['leads'] = new Leads(page)
        context['login'] = new Login(page)
        context['movies'] = new Movies(page)
        context['toast'] = new Toast(page)

        await use(context)
    }
})

module.exports = { test }