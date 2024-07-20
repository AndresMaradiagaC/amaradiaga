import { LANGUAGE_TYPE } from "./constants.js";

const languageSelected = localStorage.getItem('language');

// English
const menu = 'Menu';
const login = 'Login';
const play = 'Play';
const scores = 'Scores';
const difficulty = 'Difficulty';
const themes = 'Themes';
const credits = 'Credits';
const language = 'Language';
const low = 'Low';
const medium = 'Medium';
const high = 'High';

const food = 'Food';
const faces = 'Faces';
const flags = 'Flags';

const spanish = 'Spanish';
const english = 'English';

// Spanish
const menuES = 'Menú';
const loginES = 'Iniciar sesión';
const playES = 'Jugar';
const scoresES = 'Puntuaciones';
const difficultyES = 'Dificultad';
const themesES = 'Temas';
const creditsES = 'Créditos';
const languageES = 'Idioma';
const lowES = 'Bajo';
const mediumES = 'Medio';
const highES = 'Alto';

const foodES = 'Comida';
const facesES = 'Caras';
const flagsES = 'Banderas';

const spanishES = 'Español';
const englishES = 'Inglés';

export const LOCALIZATION = {
    menu: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? menu : menuES},
    login: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? login : loginES},
    play: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? play : playES},
    scores: scores,
    difficulty:  difficulty,
    themes:  themes,
    credits: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? credits : creditsES},
    language: language,
    low: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? low : lowES},
    medium: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? medium : mediumES},
    high: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? high : highES},
    food: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? food : foodES},
    faces: ()=> {return localStorage.getItem('language') ===  LANGUAGE_TYPE.EN ? faces : facesES},
    flags:  ()=> {return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? flags : flagsES},
    spanish: ()=> {return localStorage.getItem('language') === LANGUAGE_TYPE.EN ? spanish : spanishES },
    english: ()=> {return  localStorage.getItem('language') === LANGUAGE_TYPE.EN ? english : englishES},

};
