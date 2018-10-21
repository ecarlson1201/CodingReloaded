const SEARCH = $('#js-submit');
const LANGUAGE = $('#langSelect');
const TERM = $('#searchTerm');
const SECTION = $('.section');
const RESULTS = $('.results');
const HEADER = $('header');
const MAIN = $('main');
const NEW_SEARCH = $('#new-search');
const LOADING = $('.loading');

const YOUTUBEAPIKEY = 'AIzaSyCjQeMa3AVf38yIkwZAu3icqvSpxwGhmfw';
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const YOUTUBE_RESULTS = $('.js-youtube-results');

const STACKOVERFLOW_BUTTONS = $('.js-nav-buttons-stackoverflow');
const STACKOVERFLOW_RESULTS = $('.js-stackoverflow');
const STACKOVERFLOWAPIKEY = '29zUgiAwLvCohKmNY5HyWw((';
const STACKOVERFLOW_SEARCH_URL = 'https://api.stackexchange.com/2.2/search';

const MOZILLA_RESULTS = $('.js-mozilla');
const MOZILLA_SEARCH_URL = 'https://cors-anywhere.herokuapp.com/https://developer.mozilla.org/en-US/search.json';

const REDDIT_BUTTONS = $('.js-nav-buttons-reddit');
const REDDIT_RESULTS = $('.js-reddit');
const REDDIT_SEARCH_URL = 'https://www.reddit.com/r/programmingchallenges/search.json';
const REDDITAPIKEY = 'SSZt5wc_F2m2J9KSqwwfZnR5AV4';

let query = '';
let nextPageFunc = null;
let prevPageFunc = null;
let searchData = '';
let clicked = '';
let pageNum = 1;
let displayRedditNextPage = null;
let displayRedditPrevPage = null;
let currentCount = 0;