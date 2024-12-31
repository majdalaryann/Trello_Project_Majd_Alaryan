@regressionTest @R_3
Feature: Move Template card to todo list

    Scenario: Validate that the user can move template card to todo list successfully
        Given The user navigate to the board
        When The user clicks on the existing card
        When The user clicks on move option
        When The user choose To Do list from list field
        When The user clicks on move option from move card popover and click on close
        Then The template card should be moved successfully

