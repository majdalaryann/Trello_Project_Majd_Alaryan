/// <reference types = "cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import updateNameOfTemplateActions from "../../pageObjects/updateNameOfTemplate/actions.cy";
import updateNameOfTemplateAssertions from "../../pageObjects/updateNameOfTemplate/assertions.cy";


const updateNameOfTemplateAction = new updateNameOfTemplateActions
const updateNameOfTemplateAssertion = new updateNameOfTemplateAssertions
const dataUtil = new dataUtils
const boardName = `R3-board`
const cardName = `My Card`
const listName = `My List`
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
        listID = res.body.id
        
    //create a card in trello 
    dataUtil.creatCard(cardName, listID).then((rescard)=>{
        cy.log(rescard.body.id)
        cy.log(`card created: ${cardName}`);
        cardID = rescard.body.id

    //Convert card to template in trello
    dataUtil.convertCardToTemplate(cardID).then((tempres)=>{
        cardID = tempres.body.id
    });
    });
    });
});
});


Given(`The user navigate to the board`, ()=>{
    updateNameOfTemplateAction.openBoard(boardURL);
});

When(`The user clicks on the existing card`, ()=>{
    updateNameOfTemplateAction.clickOnCard(cardName);
});

When(`The user clicks on card name field and types the new name of the card`, ()=>{
    updateNameOfTemplateAction.clickOnNameField(newCardName)
});

When(`The user close the template card`, ()=>{
    updateNameOfTemplateAction.clickOnCloseOption();
});

Then(`The card name should be updated successfully`, ()=>{
    updateNameOfTemplateAssertion.checkListIsContainCard(newCardName);
});

after(()=>{
    cy.wait(3500);
   dataUtil.deleteBoard(boardID);
});