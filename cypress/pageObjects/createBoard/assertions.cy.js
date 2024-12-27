class createeBoardAssertions{
    checkBoardNameIsContain(boardName){
        cy.findByTestId(`board-name-input`).should(`have.value`, boardName)
        return this;
    };
};
export default createeBoardAssertions;