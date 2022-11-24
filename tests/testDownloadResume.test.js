require('chromedriver')

const{Builder, By, until} = require('selenium-webdriver');
const{assert,expect}= require('chai');

describe('Test download function',function (){
    it('Test download resume',async function(){
        const driver = await new Builder().forBrowser('chrome').build();
        const originalWindow = await driver.getWindowHandle();

        try{
            await driver.get('https://namnguyen.io/');
            await driver
                 .findElement(By.className('sm:mt-0 uppercase text-sm font-bold tracking-wide bg-cyan-600 p-3 rounded-lg focus:outline-none focus:shadow-outline text-white')).click();

            await driver.wait(
                async () => (await driver.getAllWindowHandles()).length === 2,
                10000);

            const windows = await driver.getAllWindowHandles();
            for (const handle of windows) {
                if (handle !== originalWindow) {
                    await driver.switchTo().window(handle);

                }
            }
            const title = await driver.getCurrentUrl();

            assert.equal(title,'https://namnguyen.io/Nguyen-Thanh-Hai-Nam.pdf')
        }finally {
            await driver.quit();
        }
    })
})