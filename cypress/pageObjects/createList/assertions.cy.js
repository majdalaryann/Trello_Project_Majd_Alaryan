class createListAssertions{
    checkListNameIsContain(listName){
        cy.findByTestId(`list-name`).last().should(`contain`, listName);
        return this;
    };
};
export default createListAssertions;