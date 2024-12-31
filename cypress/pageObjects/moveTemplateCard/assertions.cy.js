class moveTemplateCardAssertions{
    verifyCardMovedToList(newCardName){
         cy.findByTestId('list-name').eq(1).findByTestId('card-name').should(`contain`, newCardName);
        return this;
    };
    
};
export default moveTemplateCardAssertions;