import { IMAGEURL, CARDTEXT, REDIRECTIMAGE, SETCOLOR } from './types'


export type initialStateType = {
    ImageURL: string,
    cardText: string,
    errorURLImage: string,
    errorURL: string,
    RedirectURL: string,
    Color: string,
}
export type actionType = {
    ImageURL: string,
    Color: string,
    cardText: string,
    type: string,    
    RedirectURL: string

}
let initialState: initialStateType = {
    ImageURL: '',
    Color: '',
    RedirectURL: '',
    cardText: '',
    errorURLImage: '',
    errorURL: '',

}
function isURLImage(url: string) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
function isValidURL(url: string) {
    return (url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null)
  };
export const reducer = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case SETCOLOR: 
            return Object.assign({}, state,
                { Color: action.Color
                   
                }
            )

        case IMAGEURL:
           
            if (isURLImage(action.ImageURL))
                    
                    return Object.assign({}, state,
                        { ImageURL: action.ImageURL,
                            errorURLImage: ''
                        }
                    )
                else 
                return Object.assign({}, state,
                    { errorURLImage: "Uncorrect image url" }
                )
            
            case REDIRECTIMAGE:
                if (isValidURL(action.RedirectURL))
                    
                return Object.assign({}, state,
                    { RedirectURL: action.RedirectURL,
                        errorURL: ''
                    }
                )
            else 
            return Object.assign({}, state,
                { errorURL: "Uncorrect redirect url" }
            )
            
        case CARDTEXT:
            return Object.assign({}, state,
                { cardText: action.cardText }
            )
        default:
            return state
    }
}
