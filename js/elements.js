const SEARCH = $('#js-submit');
const LANGUAGE = $('#langSelect');
const TERM = $('#searchTerm');

const YOUTUBEAPIKEY = 'AIzaSyCjQeMa3AVf38yIkwZAu3icqvSpxwGhmfw';
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const STACKOVERFLOWAPIKEY = '29zUgiAwLvCohKmNY5HyWw((';
const STACKOVERFLOW_SEARCH_URL = 'stackoverflow.com'


let query = '';
let nextPageFunc = null;
let prevPageFunc = null;
let searchData = '';
let clicked = '';