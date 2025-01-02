/// <reference types = "cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import dataUtils from "../../support/datautils.cy";
import createListActions from "../../pageObjects/createList/actions.cy";
import createListAssertions from "../../pageObjects/createList/assertions.cy";

const createListAction = new createListActions
const createListAssertion = new createListAssertions
const dataUtil = new dataUtils

const listName = `My List`
const boardName = `R3-board`
let boardURL, boardID;

before(()=>{

    cy.loginToTrello();
    // create a board in trello
    dataUtil.createBoard(boardName).then((response)=>{
    cy.log(response.body.url) // https://trello.com/b/WvIFxlUu/r3-board
    boardURL = response.body.url
    boardID = response.body.id
    });

});

Given(`The user navigate to the board`, ()=>{
    createListAction.openBoard(boardURL);
});

When(`The user clicks on Add another list`, ()=>{
    createListAction.clickOnAddAnotherList();
});

When(`The user types My List on list name field`, ()=>{
    createListAction.typeMyListOnField(listName);
});

When(`The user clicks on Add list button`, ()=>{
    createListAction.clickOnAddListButton();
});

Then(`The list will be created successfully`, ()=>{
    createListAssertion.checkListNameIsContain(listName);
});

after(()=>{
    cy.wait(3500);
   dataUtil.deleteBoard(boardID);
});