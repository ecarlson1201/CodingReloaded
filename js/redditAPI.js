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
    <div>
        <h3>
        <a class='js-result-name' href='https://reddit.com/${result.data.permalink}' target='_blank'>${result.data.title}</a></h2>
        </h3>
    </div>
    `;
};

function renderRedditButtons() {
    return `
    <button onclick="displayRedditPrevPage()">Prev Page</button>
    <button onclick="displayRedditNextPage()">Next Page</button>
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
    $('.js-reddit').html(results);
    $('.js-nav-buttons-reddit').html(renderRedditButtons());
};