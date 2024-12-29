class createTemplateActions{

    openBoard(boardURL){
        cy.visit(boardURL);
        return this;  
    };
    clickOnCard(cardName){
        cy.contains(cardName).click();
        return this
    };

    clickOnMakeTemplate(){
        cy.findByTestId(`card-back-make-template-button`).click();
        return this
    };

    clickOnCloseOption(){
        cy.findByTestId(`CloseIcon`).first().click();
    };

};
export default createTemplateActions