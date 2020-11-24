module.exports = {
    url: 'https://www.google.com/',
    elements: {
        results: '#res',
        searchBarCss: 'input[name="q"]',
        searchBar: {
            selector: '//input[@name="q"]',
            locateStrategy: 'xpath'
        }
    }
}