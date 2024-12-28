class deleteCardActions{

    openBoard(boardURL){
        cy.visit(boardURL)
        return this;
    };

    clickOnCard(cardName){
        cy.contains(cardName).click();
        return this;
    };

    clickOnArchiveCard(){
        cy.findByTestId(`card-back-archive-button`).click();
        return this;
    };

    clickOndeleteOption(){
        cy.findByTestId(`card-back-delete-card-button`).click();
        return this;
    };

    clickOnConfirmDeleteOption(){
        cy.findByTestId(`popover-confirm-button`).click();
        return this;
    };

};
export default deleteCardActions;