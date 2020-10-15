import i18n from '../i18n'




export function translate(key : string,object? : Object){
    return i18n.t(key,object)
}