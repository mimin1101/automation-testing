require('chromedriver')
const {Builder, By} = require('selenium-webdriver');
const {assert, expect} = require('chai');

describe('Test Blog Page', function (){
    it('Test open blog 1', async function(){
        const driver = await new Builder().forBrowser('chrome').build();
        try{
            await driver.get('https://namnguyen.io/blog')

            await driver
                .findElement(By.xpath('//a[@href="/airbnbs-microservices-architecture-journey-to-quality-engineering"]'))
                    .click();
            const title1 = await driver.findElement(By.xpath("//article/h1")).getAttribute("innerHTML");
            assert.equal(title1, 'Airbnb’s Microservices Architecture Journey To Quality Engineering');

        }finally {
            await driver.quit();
        }
    })
    it('Test open blog 2', async function(){
        const driver = await new Builder().forBrowser('chrome').build();

        try{
            await driver.get('https://namnguyen.io/blog')

            await driver
                .findElement(By.xpath('//a[@href="/5-tips-writing-cleaner-code"]'))
                .click();
            const  title2 = await driver.findElement(By.xpath("//article/h1")).getAttribute("innerHTML");
            assert.equal(title2,'5 Tips For Writing Cleaner Code');

        }finally {
            await driver.quit();
        }
    })
    it('Test open blog 3', async function() {
        const driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://namnguyen.io/blog')

            await driver
                .findElement(By.xpath('//a[@href="/overcoming-the-microservice-dichotomy"]'))
                .click();
            const title3 = await driver.findElement(By.xpath('//article/h1')).getAttribute("innerHTML");
            assert.equal(title3,'Overcoming the microservice dichotomy');

        } finally {
            await driver.quit();
        }
    })
    it('Test open blog 4', async function() {
        const driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://namnguyen.io/blog')

            await driver
                .findElement(By.xpath('//a[@href="/database-sharding-101"]'))
                .click();
            let title4 = await driver
                .findElement(By.xpath("//*[text() = 'Database Sharding 101']"));
            expect(title4).to.exist
            // const title4 = await driver.findElement(By.xpath('//article/h1')).getAttribute("innerHTML");
            // assert.equal(title4,'Database Sharding 101');

        } finally {
            await driver.quit();
        }
    })
    it('Test open blog 5', async function() {
        const driver = await new Builder().forBrowser('chrome').build();

        try {
            await driver.get('https://namnguyen.io/blog')

            await driver
                .findElement(By.xpath('//a[@href="/markdown-guide"]'))
                .click();
            let title5 = await driver
                .findElement(By.xpath("//*[text() = 'Markdown Guide']"));
            expect(title5).to.exist
            // const title5 = await driver.findElement(By.xpath('//article/h1')).getAttribute("innerHTML");
            // assert.equal(title5,'Markdown Guide');
        } finally {
            await driver.quit();
        }
    })
    it('count blog', async function(){
        const driver = await new Builder().forBrowser('chrome').build();

        try{
            await driver.get ('https://namnguyen.io/blog')

            const blogs = await driver
                .findElement(By.className('container mx-auto min-h-[calc(100vh-163px)] px-5 animate-fade-in-down'))
                .findElements(By.tagName('section'))
            assert.equal(blogs.length, 5);
        } finally {
            await driver.quit();
        }
    })
})
