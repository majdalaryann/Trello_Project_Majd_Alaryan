/// <reference types = "cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import hideTemplateFromListActions from "../../pageObjects/hideTemplateFromList/actions.cy";
import hideTemplateFromListAssertions from "../../pageObjects/hideTemplateFromList/assertions.cy";

const dataUtil = new dataUtils
const hideTemplateFromListAction = new hideTemplateFromListActions
const hideTemplateFromListAssertion = new hideTemplateFromListAssertions

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
    cy.log(response.body.url);
    cy.log(response.body.id);
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

    // get to do list id
    dataUtil.getToDoListId(newListName, boardID).then((newListID)=>{
        cy.log(`To Do List ID : ${newListID}`);

    // move template card to To Do list
    dataUtil.moveTempCardToToDoList(cardID, newListID).then((moveres)=>{
        cardID = moveres.body.id
    });
    });
    });
    });
    });
    });
});


Given(`The user navigate to the board`, ()=>{
    hideTemplateFromListAction.openBorad(boardURL);
});

When(`The user clicks on the existing card`, ()=>{
    hideTemplateFromListAction.clickOnCard(newCardName);
});

When(`The user clicks on Hide from list option and close the template card`, ()=>{
    hideTemplateFromListAction.clickOnHideFromListOption();
});

Then(`The template should be hidden successfully`, ()=>{
    hideTemplateFromListAssertion.checkTemplateIsNotPresent(newCardName);
});

after(()=>{
    cy.wait(3500);
    dataUtil.deleteBoard(boardID);
   });
