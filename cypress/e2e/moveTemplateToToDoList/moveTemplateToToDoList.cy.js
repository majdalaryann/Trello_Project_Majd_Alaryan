/// <reference types = "cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import moveTemplateCardActions from "../../pageObjects/moveTemplateCard/actions.cy";
import moveTemplateCardAssertions from "../../pageObjects/moveTemplateCard/assertions.cy";

const moveTemplateCardAction = new moveTemplateCardActions
const moveTemplateCardAssertion = new moveTemplateCardAssertions
const dataUtil = new dataUtils
const boardName = `R3-board`
const cardName = `My Card`
const listName = `My List`
const newListName = `To Do`
const newCardName = `Majd's Card`
let boardURL, boardID, listID, cardID;


before(()=>{
    cy.loginToTrello();
    // create a board in trello
    dataUtil.createBoard(boardName).then((response)=>{
    cy.log(response.body.url) 
    cy.log(response.body.id)
    boardURL = response.body.url
    boardID = response.body.id

    //create a list in trello
    dataUtil.creatList(listName, boardID).then((res)=>{
        cy.log(res.body.id);
        listID = res.body.id
        
    //create a card in trello 
    dataUtil.creatCard(cardName, listID).then((rescard)=>{
        cy.log(rescard.body.id)
        cy.log(`card created: ${cardName}`);
        cardID = rescard.body.id

    //Convert card to template in trello
    dataUtil.convertCardToTemplate(cardID, newCardName).then((tempres)=>{
        cy.log(tempres.body.id);
        cardID = tempres.body.id
    });
    });
    });
});
});

Given(`The user navigate to the board`, ()=>{
    moveTemplateCardAction.openBoard(boardURL);
});

When(`The user clicks on the existing card`, ()=>{
    moveTemplateCardAction.clickOnCard(newCardName);
});

When(`The user clicks on move option`, ()=>{
    moveTemplateCardAction.clickOnMoveOption();
});

When(`The user choose To Do list from list field`, ()=>{
    moveTemplateCardAction.chooseToDoListFromListOptions();
});

When(`The user clicks on move option from move card popover and click on close`, ()=>{
    moveTemplateCardAction.clickOnMoveOptionAndClose();
});

Then(`The template card should be moved successfully`, ()=>{
    moveTemplateCardAssertion.verifyCardMovedToList(newCardName);
 });

 after(()=>{
  cy.wait(3500);
  dataUtil.deleteBoard(boardID);
 });
