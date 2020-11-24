var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.googleObjects()
        pageObject
            .navigate()
    },
    after: browser => {
        pageObject
            .end()
    },
    'My Search Test': browser => {
        var mySearches = {
            search1: 'Green Lantern',
            search2: 'Deadpool'
        }
        pageObject
            .setValue('@searchBarCss', [mySearches.search1, browser.Keys.ENTER])
            .waitForElementPresent('@results')
            .verify.containsText('@results', mySearches.search1)
            .clearValue('@searchBar')
            .setValue('@searchBar', [mySearches.search2, browser.Keys.ENTER])
            .waitForElementPresent('@results')
            .verify.containsText('@results', mySearches.search2)
    }
}