require('chromedriver')

const {Builder,By, until} = require('selenium-webdriver');
const {assert,expect} = require('chai');

describe('Test Send Mail Function', function(){
    it('Send Mail successfully', async function() {
        const driver = await new Builder().forBrowser('chrome').build();
        try{
            await driver.get('https://namnguyen.io/');

            await Promise.all([
                driver.findElement(By.name('firstName')).sendKeys('Mập địt'),
                driver.findElement(By.name('lastName')).sendKeys('xinh đợp'),
                driver.findElement(By.name('email')).sendKeys('abc@gmail.com'),
                driver.findElement(By.name('message')).sendKeys('Con jen thấy ghét.\n Con Tom dô diên')
            ]);
            await driver.findElement(By.xpath("//button[text()='Send Message']")).click();

            const text = await driver.wait(until.elementLocated(By.className('text-xl font-semibold leading-6 text-gray-900')), 5000);
            assert.equal(await text.getAttribute("innerHTML") ,'Notification');
        }finally {
             await driver.quit();
        }
    })
    it('Test validate sendmail',async function(){

        const driver = await new Builder().forBrowser('chrome').build();
        try{
            await driver.get('https://namnguyen.io/');
            await driver.findElement(By.xpath("//button[text() ='Send Message']")).click();

            const [firstName, lastName, email, message] = await Promise.all([
                driver.wait(until.elementLocated(By.xpath("//input[@name='firstName']/following-sibling::span[1]")),1000),
                driver.wait(until.elementLocated(By.xpath("//input[@name='lastName']/following-sibling::span[1]")),1000),
                driver.wait(until.elementLocated(By.xpath("//input[@name='email']/following-sibling::span[1]")),1000),
                driver.wait(until.elementLocated(By.xpath("//textarea[@name='message']/following-sibling::span[1]")),1000)
            ])

            assert.equal(await firstName.getAttribute('innerHTML'),'First name is required');
            assert.equal(await lastName.getAttribute('innerHTML'),'Last name is required');
            assert.equal(await email.getAttribute('innerHTML'),'Email is required');
            assert.equal(await message.getAttribute('innerHTML'),'Message is required');

        }finally {
            await driver.quit();
        }
    })
})