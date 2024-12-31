/// <reference types = "cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import createTemplateActions from "../../pageObjects/createTemplate/actions.cy";
import createTemplateAssertions from "../../pageObjects/createTemplate/Assertions.cy";

const createTemplateAction = new createTemplateActions
const createTemplateAssertion = new createTemplateAssertions
const dataUtil = new dataUtils
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
    createTemplateAction.openBoard(boardURL);
});

When(`The user clicks on the existing card`, ()=>{
    createTemplateAction.clickOnCard(cardName);
});

When(`The user clicks on Make template option`, ()=>{
    createTemplateAction.clickOnMakeTemplate();
});

When(`The user will click on close of the template card created`, ()=>{
    createTemplateAction.clickOnCloseOption();
});

Then(`The template will be created successfully`, ()=>{
    createTemplateAssertion.checkTemplatedIsCreated()
});

after(()=>{
    cy.wait(3500);
   dataUtil.deleteBoard(boardID);
});