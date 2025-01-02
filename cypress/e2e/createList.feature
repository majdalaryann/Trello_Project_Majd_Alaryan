@somkeTest
Feature: Create list in trello website

    Scenario: Validate that the user can create a new list
        Given The user navigate to the board
        When The user clicks on Add another list
        When The user types My List on list name field
        When The user clicks on Add list button
        Then The list will be created successfully
