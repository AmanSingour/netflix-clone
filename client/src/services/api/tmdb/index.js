//* ALL API ROUTES ARE DEFIEND HERE...

import _key from "./key"

//? BASE URL OF TMDB API...
export const BASEURL = 'https://api.themoviedb.org/3/'

//? LANGUAGE PARAM...
export const lang = '&language=en-US'

export {default as FEATURE} from './features'

export const KeyWithLang = _key+lang