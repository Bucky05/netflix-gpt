export const logo = 'https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460';
export const profile_icon = 'https://occ-0-3217-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZVecF9CGAlfKSI4Zen-R3yIwuAxKUGBcI-Hf5qHJbYHDFcEEeqDXS3SGLe0hsnA3PUHgX9VwOF-YFbQ7iu10hQgxl2J3Xs.png?r=12a';
export const API_Options =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }
};

export const API_URL = 'https://api.themoviedb.org/3/movie';

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500'

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg'

export const Supported_Languages = [{identifier:'en',name:"English"},{identifier:'hindi',name:"Hindi"},{identifier:'japanese',name:"Japanese"}]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY