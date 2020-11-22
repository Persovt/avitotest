import { IMAGEURL, CARDTEXT, REDIRECTIMAGE, SETBGCOLOR, SETFONTCOLOR } from './types'

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
export const setBgColor = (Color: string) => {

    return {
        type: SETBGCOLOR,
        Color
    }
}
export const setFontColor = (Color: string) => {

    return {
        type: SETFONTCOLOR,
        Color
    }
}