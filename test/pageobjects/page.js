class Page {

    get blogBtn() {
        return $('.navbar__item[href="/blog"]');
    }
    get searchBtn() {
        return $('.DocSearch-Button-Placeholder');
    }
    get searchInput() {
        return $('#docsearch-input');
    }
    get getStartedBtn() {
        return $('.button[href="/docs/gettingstarted"]');
    }

    open(path) {
        browser.url(path);
    }
    openBlog() {
        this.blogBtn.click();
    }
    search(text) {
        this.searchBtn.click();
        this.searchInput.addValue(text);
        browser.keys('Enter');
    }
}
module.exports = new Page();
