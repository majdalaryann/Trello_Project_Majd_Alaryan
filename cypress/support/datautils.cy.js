import { APIKey, APIToken } from "../support/constant.cy";

class dataUtils {
    createBoard = (boardName)=>{
       return cy.request(`POST`,  `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    };

    deleteBoard = (boardID)=>{
        return cy.request(`DELETE`, `https://api.trello.com/1/boards/${boardID}?key=${APIKey}&token=${APIToken}`)
    };

    creatList = (listName, boardID)=>{
        return cy.request("POST", `https://api.trello.com/1/lists?name=${listName}&idBoard=${boardID}&key=${APIKey}&token=${APIToken}` );
    };

    creatCard = (cardName, listID)=>{
        return cy.request("POST", `https://api.trello.com/1/cards?idList=${listID}&name=${cardName}&key=${APIKey}&token=${APIToken}`);
    };

    convertCardToTemplate = (cardID, newCardName) => {
        return cy.request("PUT", `https://api.trello.com/1/cards/${cardID}?key=${APIKey}&token=${APIToken}`, {
            isTemplate: true,
            name: newCardName,
        });
    };

    getToDoListId = (newListName, boardID) => {
        return cy.request("GET", `https://api.trello.com/1/boards/${boardID}/lists?key=${APIKey}&token=${APIToken}`).then((response) => {
            const toDoList = response.body.find(list => list.name === newListName);
            if (toDoList) {
                return toDoList.id;
            };
        });
    };

    moveTempCardToToDoList = (cardID, newListID)=>{
        return cy.request("PUT", `https://api.trello.com/1/cards/${cardID}?idList=${newListID}&key=${APIKey}&token=${APIToken}`);
    };
};
export default dataUtils;