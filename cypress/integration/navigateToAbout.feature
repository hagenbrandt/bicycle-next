Feature: Navigate To About

    I navigate from home to the about page
    
    @focus
    Scenario: Test the navigation
        When I visit the route '/'
        And click on 'a[href="/about"]'
        Then I expect the 'h1' to contain 'About Page'