export const logo = 'https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460';
export const profile_icon = '/profile-icon.png';
export const API_Options =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_READ_TOKEN
  }
};

export const API_URL = 'https://api.themoviedb.org/3/movie';

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500'

export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg'

export const Supported_Languages = [{identifier:'en',name:"English"},{identifier:'hindi',name:"Hindi"},{identifier:'japanese',name:"Japanese"}]

export const OPENAI_KEY = process.env.REACT_APP_GEMINI_API_KEY