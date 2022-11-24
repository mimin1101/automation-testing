require('chromedriver');

const {Builder,By, Key, until, error} = require("selenium-webdriver");
const {assert, expect} = require('chai');

describe('Test Home Page',function () {
    it('Test about section', async function() {
        const driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://namnguyen.io/');

            let aboutSection = await driver
                .findElement(By.className('animate-waving-hand'))
                .getText();

            assert.equal(aboutSection,'👋🏻');
        } finally {
            await driver.quit();
        }
    })
    it('Test career section ',async function(){
        const driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://namnguyen.io/');

            let careerSection = await driver
                // .findElement(By.className('text-4xl mb-4 font-normal text-black'));
                //assert.equal(section2, 'My Career So Far');
                .findElement(By.xpath("//*[text() = 'My Career So Far']"));

            expect(careerSection).to.exist;
        } finally {
            await driver.quit();
        }
    })
    it('Test sendmail section', async function(){
        const driver = await new Builder().forBrowser('chrome').build();

        try{
            await driver.get('https://namnguyen.io/');

            let sendmailSection = await driver
                .findElement(By.xpath("//*[text() ='Send me a message']"));

            expect(sendmailSection).to.exist;

        }finally {
            await driver.quit();
        }
    })
})