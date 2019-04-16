function getDataFromApi(searchTerm, callback) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 4,
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
};

function getPageFromApi(searchTerm, callback, nextPage) {
    const query = {
        part: 'snippet',
        q: searchTerm,
        key: YOUTUBEAPIKEY,
        maxResults: 4,
        pageToken: nextPage
    };
    $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
};

//renders desktop links for videos
function renderResult(result) {
    return `
    <div class='youtube-table'>
        <div class='js-result-name js-youtube-result'>
            <div class='video link'>
             <p class='vid-title'>${result.snippet.title}</p>
             <img alt='thumbnail' class="js-thumbnail thumbnail" src='${result.snippet.thumbnails.medium.url}' height='90' width='120'><br>
            </div>
         </div>
        <a class='js-result-name channel' href='https://www.youtube.com/channel/${result.snippet.channelId}' target='_blank'>${result.snippet.channelTitle}</a><br>
    </div>
    `;
};

//renders mobile links for videos
function renderMobileResult(result) {
    return `
    <div class='youtube-table'>
        <a class='js-result-name' href='https://www.youtube.com/watch?v=${result.id.videoId}' target='_blank'>
            <div class='video link'>
             <p class='vid-title'>${result.snippet.title}</p>
             <img alt='thumbnail' class="js-thumbnail thumbnail" src='${result.snippet.thumbnails.medium.url}' height='90' width='120'><br>
             </div>
         </a>
        <a class='js-result-name channel' href='https://www.youtube.com/channel/${result.snippet.channelId}' target='_blank'>${result.snippet.channelTitle}</a><br>
    </div>
    `;
};

//checks if API request returned data, mapping results if it did
function displayYoutubeSearchData(data) {
    searchData = data;
    modalData = data;

    YOUTUBE_RESULTS.ready(function () {
        $('#load-youtube').addClass('hidden');
    });

    nextPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.nextPageToken)
    };
    prevPageFunc = function () {
        getPageFromApi(query, displayYoutubeSearchData, data.prevPageToken)
    };

    if ($(window).width() > 500) {
        const results = data.items.map((item, index) => renderResult(item));
        $('.js-youtube').html(results);
        displayModal();
    }
    else {
        const results = data.items.map((item, index) => renderMobileResult(item));
        $('.js-youtube').html(results);
    };
};