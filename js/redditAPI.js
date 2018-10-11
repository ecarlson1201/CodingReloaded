function getDataFromReddit(searchTerm, callback) {
    const query = {
        q: searchTerm,
        secrect: REDDITAPIKEY,
        restrict_sr: 'on'
    }
    $.getJSON(REDDIT_SEARCH_URL, query, callback)
}

function renderRedditResults(result){
    return `
    <div>
        <h3>
        <a class='js-result-name' href=${result.link}' target='_blank'>${result.title}</a></h2>
        </h3>
    </div>
    `
}

function displayRedditData(data) {
    console.log(data)
    searchData = data
    const results = data.items.map((item, index) => renderRedditResults(item));
    $('.js-Reddit').html(results);
}