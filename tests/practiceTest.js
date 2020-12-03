var pageObject = {}
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.googleObjects()
        pageObject
            .navigate()
            .maximizeWindow()
    },
    after: browser => {
        pageObject
            .end()
    },
    'Add To Processor Cart': browser => {
        pageObject
        //AMD Ryzen™ 9 3950X Desktop Processor
            
            //.click('a[class="cookieComplianceClose"]') //Click I understand in cookies popup
            .useXpath()
            .waitForElementPresent('//a[contains(@href,"linkid=3950xdesktop")]')
            .click('(//a[contains(@class,"btn-shopping-cart btn-shopping-neutral")])[6]')
            
            
            .api.windowHandles(result => {
                browser.switchWindow(result.value[1])
             
            })
        pageObject
        .useCss()
        .waitForElementPresent('h1')
            .waitForElementPresent('div[class="dr_removeItem"]')
            .click('div[class="dr_removeItem"]') //removes item
    },
    'Checkout Processor': browser => {
        pageObject
            .useXpath()
            .waitForElementPresent('//a[contains(@href,"linkid=3950xdesktop")]')
            .click('(//a[contains(@class,"btn-shopping-cart btn-shopping-neutral")])[6]')
            
            .api.windowHandles(result => {
                browser.switchWindow(result.value[2])
                    //.verify.urlEquals('https://shop.amd.com/')
            }),
        pageObject
           
            .click('(//a[contains(@id, "dr_shoppingCartCheckoutButton")])[1]')//Clicks checkout button
            .useCss()
            .setValue('input[id="billingName1"]', 'Tony')
            .setValue('input[id="billingName2"]', 'Stark')
            .setValue('input[id="billingAddress1"]', '123 Stark Towerd Rd')
            .setValue('input[id="billingCity"]', 'New York')
            .setValue('select[id="billingState"]', 'New York')
            .setValue('input[id="billingPostalCode"]', '10001')
            .setValue('input[id="email"]', 'tonystark@ironman.com')
            .setValue('input[id="billingPhoneNumber"]', '3181234567')
            .setValue('input[id="ccNum"]', '4242424242424242')
            .setValue('select[id="ccMonth"]', 'October')
            .setValue('select[id="ccYear"]', '2023')
            .setValue('input[id="cardSecurityCode"]', '123')
    }
}