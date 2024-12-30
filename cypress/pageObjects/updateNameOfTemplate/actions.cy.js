class updateNameOfTemplateActions{
    openBoard(boardURL){
        cy.visit(boardURL);
        return this;
    };

    clickOnCard(cardName){
        cy.contains(cardName).click();
        return this;
    };

    clickOnNameField(newCardName){
        cy.findByTestId(`card-back-title-input`).click().clear().type(newCardName + `{enter}`);
        return this
    };

    clickOnCloseOption(){
        cy.findByTestId(`CloseIcon`).first().click();
        return this;
    };

};
export default updateNameOfTemplateActions;