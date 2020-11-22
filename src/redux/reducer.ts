import { IMAGEURL, CARDTEXT, REDIRECTIMAGE, SETFONTCOLOR, SETBGCOLOR } from './types'


export type initialStateType = {
    ImageURL: string,
    cardText: string,
    errorURLImage: string,
    errorURL: string,
    RedirectURL: string,
    BgColor: string,
    FontColor: string,
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
    BgColor: '',
    FontColor: '',
    RedirectURL: '',
    cardText: '',
    errorURLImage: '',
    errorURL: '',

}
const isImageUrl = (url: string) =>{ 
    try {
        let http = new XMLHttpRequest(); 
    
        http.open('HEAD', url, false); 
        http.send(); 
    
        return http.status != 404; 
    } catch  {
        return false
    }
   
 
} 
function isValidURL(url: string) {
    return (url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null)
  };
  
export const reducer = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case SETBGCOLOR: 
            return Object.assign({}, state,
                { BgColor: action.Color
                   
                }
            )
            case SETFONTCOLOR: 
            return Object.assign({}, state,
                { FontColor: action.Color
                   
                }
            )

        case IMAGEURL:
           
            if (isImageUrl(action.ImageURL))
                    
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
