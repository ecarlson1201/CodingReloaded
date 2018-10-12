function getDataFromReddit(searchTerm, callback) {
    const query = {
        q: searchTerm,
        client_id: REDDITAPIKEY,
        restrict_sr: 1,
    }
    $.getJSON(REDDIT_SEARCH_URL, query, callback)
}

function renderRedditResults(result){
    return `
    <div>
        <h3>
        <a class='js-result-name' href='https://reddit.com/${result.data.permalink}' target='_blank'>${result.data.title}</a></h2>
        </h3>
    </div>
    `
}

function displayRedditData(data) {
    searchData = data
    const results = data.data.children.map((item, index) => renderRedditResults(item));
    $('.js-reddit').html(results);
}