function getDataFromApi(searchTerm, callback) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 3,
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback)
}

function getPageFromApi(searchTerm, callback, nextPage) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 3,
        pageToken: nextPage
    }
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback)
}

function renderResult(result) {
    return `
    <div>
        <h3>
        <a class='js-result-name' href='https://www.youtube.com/watch?v=${result.id.videoId}' target='_blank'>${result.snippet.title}</a></h3>
        <a class='js-result-name' href='https://www.youtube.com/channel/${result.snippet.channelId}' target='_blank'>${result.snippet.channelTitle}</a><br>
        <img alt='thumbnail' class="js-thumbnail" src='${result.snippet.thumbnails.medium.url}' height='90' width='120'>
    </div><br>
    `;
}

function renderButtons() {
    return `
    <button onclick="prevPageFunc()">Prev Page</button>
    <button onclick="nextPageFunc()">Next Page</button>
    `;
}

function displayYoutubeSearchData(data) {
    searchData = data
    nextPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.nextPageToken)
    }
    prevPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.prevPageToken)
    }
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-youtube').html(results);
    $('.js-nav-buttons-youtube').html(renderButtons());
}