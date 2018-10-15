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

function getNextPageNum(){
    pageNum++;
};

function getPrevPageNum(){
    if(pageNum > 1){
        pageNum--
    };
};

function displayNextPage(){
    getNextPageNum();
    getDataFromStackOverflow(query, displayStackOverflowData);
};

function displayPrevPage(){
    getPrevPageNum();
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
    <button class="js-nav-buttons-stackoverflow" onclick="displayPrevPage()">Prev Page</button>
    <button onclick="displayNextPage()" class="js-nav-buttons-stackoverflow">Next Page</button>
    `;
};

function displayStackOverflowData(data) {
    searchData = data;
    console.log(data);
    const results = data.items.map((item, index) => renderStackOverflowResults(item));
    $('.js-stackoverflow').html(results);
    $('.js-nav-buttons-stackoverflow').html(renderForumButtons())
};