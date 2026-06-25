const { test, expect } = require('@playwright/test');

test('deve cadastrar um lead na fila de espera', async ({ page }) => {
    await page.goto('http://localhost:3000');


    await page.getByRole('button', { name: /Aperte o play/ }).click()

    await page.locator('#name').fill('fernandoarraismachado@yahoo.com.br')

    await page.waitForTimeout(3000)
});