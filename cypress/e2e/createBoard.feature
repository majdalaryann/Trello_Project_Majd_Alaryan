@smokeTest
Feature: create a board on Trello website

    Scenario: create a new board
        Given The user login to trello website
        When  The user clicks on create button in nav bar
        And The user choose create board option
        And The user types board name in board title field
        And The user clicks on create button
        Then The board will be created successfully


