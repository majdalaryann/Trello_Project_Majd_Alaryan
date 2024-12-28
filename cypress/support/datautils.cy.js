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
    
};
export default dataUtils