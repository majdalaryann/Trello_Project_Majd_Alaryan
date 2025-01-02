class createListActions{
    openBoard(boardURL){
        cy.visit(boardURL);
        return this;
    };

    clickOnAddAnotherList(){
        cy.findByTestId(`list-composer-button`).click();
        return this;
    };

    typeMyListOnField(listName){
        cy.findByTestId(`list-name-textarea`).last().click({force: true}).type(listName);
        return this;
    };

    clickOnAddListButton(){
        cy.findByTestId(`list-composer-add-list-button`).click();
        return this;
    };
};
export default createListActions;
