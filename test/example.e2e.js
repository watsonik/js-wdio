const Page = require('./pageobjects/page');
const assert = require('assert');

describe('WebdriverIO page', () => {

    before(() => {
        Page.open('/');
    });

    it('should have the right URL', () => {
        expect(browser).toHaveUrl('https://webdriver.io/');
    })
    it('should have the right title', () => {
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    })
    it('should have Get Started', () => {
        expect(Page.getStartedBtn).toBeEnabled();
    })
    it('should have the Blog', () => {
        Page.openBlog();
        expect(browser).toHaveUrl('https://webdriver.io/blog');
    })
    it('should search text', () => {
        Page.search('browser');
        expect(browser).toHaveTitle('The Browser Object | WebdriverIO');
        browser.saveScreenshot('./screenshots/search.png');
    })
});
