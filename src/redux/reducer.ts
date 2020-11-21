import {IMAGEURL, CARDTEXT} from './types'
 
export type initialStateType = {
    ImageURL: string,
  cardText: string
}
export type actionType = {
    ImageURL: string,
    cardText: string,
    type: string,
   
}
let initialState: initialStateType = {
    ImageURL: 'https://i.ytimg.com/vi/NKk6rGDpq6Y/sddefault.jpg',
   cardText: 'None text!',
   
}

export const reducer = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case IMAGEURL:
            
            return Object.assign({}, state,  
               { ImageURL: action.ImageURL}
            )
            case CARDTEXT:
                return Object.assign({}, state,  
                    { cardText: action.cardText}
                 )
            default:
                return state
     }
    }
