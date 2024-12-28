class deleteCardAssertions{
    checkCardIsNotPresent(cardName){
        cy.contains(cardName).should("not.exist");
        return this;
    };
};
export default deleteCardAssertions;