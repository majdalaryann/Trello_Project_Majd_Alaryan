/// <reference types = "cypress" />

import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import deleteCardActions from "../../pageObjects/deleteExistingCard/actions.cy";
import deleteCardAssertions from "../../pageObjects/deleteExistingCard/assertions.cy";

const dataUtil = new dataUtils
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();

const boardName = `R3-board`
const cardName = `My Card`
const listName = `My List`
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
    });
    });
});
});



Given(`The user navigate to the board`, ()=>{
    deleteCardAction.openBoard(boardURL);
});


When(`The user clicks on the existing card`, ()=>{
    deleteCardAction.clickOnCard(cardName);
});


When(`The user clicks on archive card`, ()=>{
    deleteCardAction.clickOnArchiveCard();
});


When(`The user clicks on delete option`, ()=>{
    deleteCardAction.clickOndeleteOption();
});


When(`The user clicks on confirm delete option`, ()=>{
    deleteCardAction.clickOnConfirmDeleteOption();
});


Then(`The card will be deleted successfully`, ()=>{
    deleteCardAssertion.checkCardIsNotPresent(cardName);
});

after(()=>{
    cy.wait(3500);
   dataUtil.deleteBoard(boardID);
});

