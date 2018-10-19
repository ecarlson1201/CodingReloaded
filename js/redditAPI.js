function getDataFromReddit(searchTerm, callback,) {
    const query = {
        q: searchTerm,
        client_id: REDDITAPIKEY,
        restrict_sr: 1,
        limit: 5,
    };
    $.getJSON(REDDIT_SEARCH_URL, query, callback);
};

function getNextFromReddit(searchTerm, callback, after, count) {
    const query = {
        q: searchTerm,
        client_id: REDDITAPIKEY,
        restrict_sr: 1,
        limit: 5,
        after: after,
        count: count
    };
    $.getJSON(REDDIT_SEARCH_URL, query, callback);
};

function getPrevFromReddit(searchTerm, callback, before, count) {
    const query = {
        q: searchTerm,
        client_id: REDDITAPIKEY,
        restrict_sr: 1,
        limit: 5,
        before: before,
        count: count
    };
    $.getJSON(REDDIT_SEARCH_URL, query, callback);
};

function renderRedditResults(result) {
    return `
    <a class='js-result-name' href='https://reddit.com/${result.data.permalink}' target='_blank'>
        <div class='link'>
            <h3>${result.data.title}</h3>
        </div>
    </a>
    `;
};

function displayRedditData(data) {
    searchData = data;
    displayRedditNextPage = function () {
        currentCount += data.data.dist
        getNextFromReddit(TERM.val(), displayRedditData, data.data.after, currentCount);
    };
    displayRedditPrevPage = function () {
        currentCount -= data.data.dist
        getPrevFromReddit(TERM.val(), displayRedditData, data.data.before, currentCount);
    };

    const results = data.data.children.map((item, index) => renderRedditResults(item));
    
    if(data.data.children.length > 0){
        REDDIT_RESULTS.html(results);
        REDDIT_BUTTONS.removeClass('hidden');
    }

    else{
    REDDIT_RESULTS.html(`Oops, no results found for ${TERM.val()}.`)
    };
};