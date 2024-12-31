class moveTemplateCardActions{
    openBoard(boardURL){
        cy.visit(boardURL);
        return this;
    };

    clickOnCard(newCardName){
        cy.contains(newCardName).click();
        return this;
    };

    clickOnMoveOption(){
        cy.findByTestId(`card-back-move-card-button`).click();
        cy.wait(2000);
        return this;
    };

    chooseToDoListFromListOptions(){
        cy.findByTestId(`move-card-popover-select-list-destination`).click().type("{downArrow}{downArrow}{enter}");
        return this;
    };

    

    clickOnMoveOptionAndClose(){
        cy.findByTestId(`move-card-popover-move-button`).click().findByTestId(`CloseIcon`).first().click();
        return this;
    };
};

export default moveTemplateCardActions;
