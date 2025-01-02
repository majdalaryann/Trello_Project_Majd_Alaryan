@smokeTest
Feature: Create Card in trello website

    Scenario: Validate that the user can create a new card
        Given The user navigate to the board
        When  The user Clicks on Add a Card button
        And The user types card name in card title input field
        And The user clicks on Add Card button
        Then The card will be created successfully


