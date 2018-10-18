function getDataFromStackOverflow(searchTerm, callback) {
    const query = {
        order: 'desc',
        sort: 'votes',
        site: 'stackoverflow',
        intitle: searchTerm,
        pagesize: 5,
        page: pageNum
    };
    $.getJSON(STACKOVERFLOW_SEARCH_URL, query, callback);
};

function displayNextPage() {
    pageNum++;
    getDataFromStackOverflow(query, displayStackOverflowData);
};

function displayPrevPage() {
    if (pageNum > 1) {
        pageNum--
    };
    getDataFromStackOverflow(query, displayStackOverflowData);
};

function renderStackOverflowResults(result) {
    return `
    <div>
        <h3>
        <a class='js-result-name' href=${result.link}' target='_blank'>${result.title}</a></h2>
        </h3>
    
    </div>
    `;
};

function displayStackOverflowData(data) {
    searchData = data;
    const results = data.items.map((item, index) => renderStackOverflowResults(item));

    if (data.items.length > 0) {
        STACKOVERFLOW_RESULTS.html(results);
        STACKOVERFLOW_BUTTONS.removeClass('hidden');
    }
    else {
        STACKOVERFLOW_RESULTS.html(`Oops, no results found for ${TERM.val()}.`)
    };
};