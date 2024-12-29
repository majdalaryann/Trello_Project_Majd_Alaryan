class createTemplateAssertions{
    checkTemplatedIsCreated(){
        cy.contains(`This card is a template.`).should(`exist`);
    };
};
export default createTemplateAssertions;