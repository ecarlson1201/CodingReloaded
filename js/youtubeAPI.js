function getDataFromApi(searchTerm, callback) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 3,
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
};

function getPageFromApi(searchTerm, callback, nextPage) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 3,
        pageToken: nextPage
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
};

function renderResult(result) {
    return `
    <a class='js-result-name' href='https://www.youtube.com/watch?v=${result.id.videoId}' target='_blank'>
        <div class='link'>
            <h3>${result.snippet.title}</h3>
            <img alt='thumbnail' class="js-thumbnail" src='${result.snippet.thumbnails.medium.url}' height='90' width='120'><br>
        </div>
    </a>
    <a class='js-result-name channel' href='https://www.youtube.com/channel/${result.snippet.channelId}' target='_blank'>${result.snippet.channelTitle}</a><br>
    `;
};

function displayYoutubeSearchData(data) {
    searchData = data;
    nextPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.nextPageToken)
    };
    prevPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.prevPageToken)
    };
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-youtube').html(results);
};