const login = 'LOGIN';
const play = 'PLAY';
const scores = 'SCORES';
const difficulty = 'DIFFICULTY';
const themes = 'THEMES';
const credits = 'CREDITS';
const menu = 'MENU';
const localization = 'LOCALIZATION';

export const GOTO_EVENT_TYPE = {
    LOGIN: login,
    PLAY: play,
    SCORES: scores,
    DIFFICULTY: difficulty,
    THEMES: themes,
    CREDITS: credits,
    MENU: menu,
    LOCALIZATION: localization
};

const low = 4;
const med = 8;
const high = 16;

export const DIFFICULTY_TYPE = {
    LOW: low,
    MED: med,
    HIGH: high
};

const food = 'FOOD';
const faces = 'FACES';
const flags = 'FLAGS';
const pacman = 'PACMAN';
const mario = 'MARIO';


export const THEME_TYPE = {
    FOOD: food,
    FACES: faces,
    FLAGS: flags,
    PACMAN: pacman,
    MARIO: mario
};

const spanish = 'es';
const english = 'en';

export const LANGUAGE_TYPE = {
    ES: spanish,
    EN: english
};
