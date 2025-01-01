class hideTemplateFromListAssertions{
    checkTemplateIsNotPresent(newCardName){
        cy.findByTestId('list-name').eq(1).within(()=>{
            cy.contains(newCardName).should(`not.exist`);
        });
    };
};
export default hideTemplateFromListAssertions;