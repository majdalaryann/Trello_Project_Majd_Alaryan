class updateNameOfTemplateAssertions{
    checkListIsContainCard(newCardName){
        cy.findByTestId(`card-name`).should(`contain`, newCardName)
        return this;
    };
};
export default updateNameOfTemplateAssertions;