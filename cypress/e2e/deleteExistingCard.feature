@smokeTest @R_0
Feature: Delete a card in Trello website

    Scenario: Validate that the user can delete an existing card
        Given The user navigate to the board
        When The user clicks on the existing card
        And The user clicks on archive card
        And The user clicks on delete option
        And The user clicks on confirm delete option
        Then The card will be deleted successfully
