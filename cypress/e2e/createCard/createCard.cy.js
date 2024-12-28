/// <reference types = "cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import createCardActions from "../../pageObjects/createCard/actions.cy";
import createCardAssertions from "../../pageObjects/createCard/assertions.cy";

const boardName = `R3-board`
const cardName = `My Card`
let boardURL, boardID;


const dataUtil = new dataUtils();
const createCardAction = new createCardActions();
const creatCardAssertion = new createCardAssertions();

before(()=>{

    cy.loginToTrello();
    // create a board in trello
    dataUtil.createBoard(boardName).then((response)=>{
    cy.log(response.body.url) // https://trello.com/b/WvIFxlUu/r3-board
    boardURL = response.body.url
    boardID = response.body.id
    });

});


Given(`the user navigate to the board`, ()=>{
    createCardAction.openBoard(boardURL);
});

When(`The user Clicks on Add a Card button`, ()=>{
    createCardAction.clickonAddACardButton();
});

When(`The user types card name in card title input field`, ()=>{
    createCardAction.typeInCardTitleInputField(cardName);
});

When(`The user clicks on Add Card button`, ()=>{
    createCardAction.clickOnAddCardButton();
});

Then(`The card will be created successfully`, ()=>{
creatCardAssertion.checkListIsContainCard(cardName);
});

after(()=>{
    cy.wait(3500);
   dataUtil.deleteBoard(boardID);
});