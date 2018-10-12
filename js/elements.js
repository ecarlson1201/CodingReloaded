const SEARCH = $('#js-submit');
const LANGUAGE = $('#langSelect');
const TERM = $('#searchTerm');

const YOUTUBEAPIKEY = 'AIzaSyCjQeMa3AVf38yIkwZAu3icqvSpxwGhmfw';
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

const STACKOVERFLOWAPIKEY = '29zUgiAwLvCohKmNY5HyWw((';
const STACKOVERFLOW_SEARCH_URL = 'https://api.stackexchange.com/2.2/search';

const MOZILLA_SEARCH_URL = 'https://developer.mozilla.org/en-US/search.json';

const REDDIT_SEARCH_URL = 'http://www.reddit.com/r/programming/search.json';
const REDDITAPIKEY = 'SSZt5wc_F2m2J9KSqwwfZnR5AV4';

let query = '';
let nextPageFunc = null;
let prevPageFunc = null;
let searchData = '';
let clicked = '';