import { APIKey, APIToken } from "../support/constant.cy";

class dataUtils {
    createBoard = (boardName)=>{
       return cy.request(`POST`,  `https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    };

    deleteBoard = (boardID)=>{
        cy.request(`DELETE`, `https://api.trello.com/1/boards/${boardID}?key=${APIKey}&token=${APIToken}`)
    };
};
export default dataUtils