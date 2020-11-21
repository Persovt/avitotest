import {IMAGEURL, CARDTEXT} from './types'

export const setImageURL = (ImageURL: string) => {
   
    return {
        type: IMAGEURL,
        ImageURL
    }
}
export const setCardText = (cardText: string) => {
    
    return {
        type: CARDTEXT,
        cardText
    }
}