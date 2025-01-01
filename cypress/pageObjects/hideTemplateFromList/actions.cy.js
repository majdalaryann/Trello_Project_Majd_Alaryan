class hideTemplateFromListActions{
    openBorad(boardURL){
        cy.visit(boardURL);
        return this;
    };

    clickOnCard(newCardName){
        cy.contains(newCardName).click();
        return this;
    };

    clickOnHideFromListOption(){
        cy.findByTestId(`card-back-archive-button`).click().findByTestId(`CloseIcon`).first().click();
        return this;
    };
};
export default hideTemplateFromListActions;