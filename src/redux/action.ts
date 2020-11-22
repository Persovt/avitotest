import { IMAGEURL, CARDTEXT, REDIRECTIMAGE, SETCOLOR } from './types'

export const setImageURL = (ImageURL: string) => {

    return {
        type: IMAGEURL,
        ImageURL
    }
}
export const setRedirectURL = (RedirectURL: string) => {

    return {
        type: REDIRECTIMAGE,
        RedirectURL
    }
}

export const setCardText = (cardText: string) => {

    return {
        type: CARDTEXT,
        cardText
    }
}
export const setColor = (Color: string) => {

    return {
        type: SETCOLOR,
        Color
    }
}