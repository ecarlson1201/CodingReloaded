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

function displayNextPage(){
    pageNum++;
    getDataFromStackOverflow(query, displayStackOverflowData);
};

function displayPrevPage(){
    if(pageNum > 1){
        pageNum--
    };
    getDataFromStackOverflow(query, displayStackOverflowData);
};

function renderStackOverflowResults(result){
    return `
    <div>
        <h3>
        <a class='js-result-name' href=${result.link}' target='_blank'>${result.title}</a></h2>
        </h3>
    
    </div>
    `;
};

function renderForumButtons() {
    return `
    <button onclick="displayPrevPage()">Prev Page</button>
    <button onclick="displayNextPage()">Next Page</button>
    `;
};

function displayStackOverflowData(data) {
    searchData = data;
    const results = data.items.map((item, index) => renderStackOverflowResults(item));
    $('.js-stackoverflow').html(results);
    $('.js-nav-buttons-stackoverflow').html(renderForumButtons())
};