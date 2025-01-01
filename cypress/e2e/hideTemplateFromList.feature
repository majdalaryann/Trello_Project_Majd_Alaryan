@regressionTest @R_4
Feature: Hide template from list in trello website

    Scenario: Validate that the user can hide template from list successfully
        Given The user navigate to the board
        When The user clicks on the existing card
        When The user clicks on Hide from list option and close the template card
        Then The template should be hidden successfully
