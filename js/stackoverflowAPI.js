function getDataFromStackOverflow(searchTerm, callback) {
    const query = {
        similar: searchTerm,
        key: STACKOVERFLOWAPIKEY,
    }
    $.getJSON(STACKOVERFLOW_SEARCH_URL, query, callback)
}

function displayStackOverflowData(data) {
    console.log(data)
    searchData = data
    nextPageFunc = function () {
        getPageFromStackOverflow(query, displayYoutubeSearchData, data.nextPageToken)
    }
    prevPageFunc = function () {
        getPageFromStackOverflow(query, displayYoutubeSearchData, data.prevPageToken)
    }
    const results = data.items.map((item, index) => renderResult(item));
    $('.js-stackoverflow').html(results);
    $('.js-nav-buttons-stackoverflow').html(renderButtons());
}