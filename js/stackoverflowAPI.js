function getDataFromStackOverflow(searchTerm, callback) {
    const query = {
        search: searchTerm,
        key: STACKOVERFLOWAPIKEY,
    }
    $.getJSON(STACKOVERFLOW_SEARCH_URL, query, callback)
}

function displayStackOverflowData(data) {
    console.log(data)
    searchData = data

    const results = data.items.map((item, index) => renderResult(item));
    $('.js-stackoverflow').html(results);
}