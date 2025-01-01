@smokeTest @R_1

Feature: create a template in trello website
    Scenario: Validate that the user can create card template
        Given The user navigate to the board
        When The user clicks on the existing card
        And The user clicks on Make template option
        And The user will click on close of the template card created
        Then The template will be created successfully

