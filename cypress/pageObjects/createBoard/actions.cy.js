class createBoardActions{
    clickOnNavBarCreateButton(){
        cy.findByTestId(`header-create-menu-button`).click();
        return this;
    };

    clickOnCreateBoardOption(){
        cy.findByTestId(`header-create-board-button`).click();
        return this;
    };

    typeInBoardTitleInputField(BoardName){
        cy.findByTestId(`create-board-title-input`).type(BoardName)
        return this;
    };

    clickOnCreateButton(){
        cy.findByTestId(`create-board-submit-button`).click();
        cy.wait(3000);
        return this;
    };
};
export default createBoardActions;