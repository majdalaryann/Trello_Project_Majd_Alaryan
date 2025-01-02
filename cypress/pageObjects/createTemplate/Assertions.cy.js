class createTemplateAssertions{
    checkTemplatedIsCreated(){
        cy.contains(`This card is a template.`).should(`exist`);
        return this;
    };
};
export default createTemplateAssertions;