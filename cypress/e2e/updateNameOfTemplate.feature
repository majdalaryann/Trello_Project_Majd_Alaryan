@regressionTest @R_2
Feature: Update the name of template in trello


    Scenario: Validate that the user can update the name of template in trello
        Given The user navigate to the board
        When The user clicks on the existing card
        When The user clicks on card name field and types the new name of the card
        When The user close the template card
        Then The card name should be updated successfully