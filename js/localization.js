import { LANGUAGE_TYPE } from "./constants.js";

const languageSelected = localStorage.getItem('language');



//English
const menu = 'Menu';
const login = 'Login';
const play = 'Play';
const scores = 'Scores';
const difficulty = 'Difficulty';
const theme = 'Theme';
const credits = 'Credits';
const language = 'Language';
const low = 'Low';
const medium = 'Medium';
const hight = 'Hight';

const food = 'Food';
const faces = 'Faces';
const flags = 'Flags';

const spanish = 'Spanish';
const english = 'English';

const menuES = 'Menu';
const loginES = 'Iniciar sesion';

const spanishES = 'Español';
const englishES = 'Ingles';




export const LOCALIZATION = {
    menu: ()=> {return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? menu : menuES },
    login: ()=> {return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? login : loginES },
    play: play,
    scores: scores,
    difficulty: difficulty,
    theme: theme,
    credits: credits,
    low: low,
    language: language,
    medium: medium,
    hight: hight,

    food: food,
    faces: faces,
    flags: flags,

    spanish: ()=> {return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? spanish : spanishES },
    english: ()=> {return  localStorage.getItem('language') === LANGUAGE_TYPE.EN ? english : englishES},

}