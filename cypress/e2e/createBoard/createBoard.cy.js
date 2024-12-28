import{Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../pageObjects/createBoard/actions.cy";
import createBoardAssertions from "../../pageObjects/createBoard/assertions.cy";


const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions
const boradName = `MyFirstBoard`;


Given(`The user login to trello website`, ()=>{
    cy.loginToTrello();
});

When(`The user clicks on create button in nav bar`, ()=>{
    createBoardAction.clickOnNavBarCreateButton();
});

When(`The user choose create board option`, ()=>{
    createBoardAction.clickOnCreateBoardOption();
});

When(`The user types board name in board title field`, ()=>{
    createBoardAction.typeInBoardTitleInputField(boradName);
});

When(`The user clicks on create button`, ()=>{
    createBoardAction.clickOnCreateButton();
});

Then(`The board will be created successfully`, ()=>{
    createBoardAssertion.checkBoardNameIsContain(boradName);
});