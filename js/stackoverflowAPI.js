function getDataFromStackOverflow(searchTerm, callback) {
    const query = {
        order: 'desc',
        sort: 'votes',
        site: 'stackoverflow',
        intitle: searchTerm,
        pagesize: 5
    }
    $.getJSON(STACKOVERFLOW_SEARCH_URL, query, callback)
}

function renderStackOverflowResults(result){
    return `
    <div>
        <h3>
        <a class='js-result-name' href=${result.link}' target='_blank'>${result.title}</a></h2>
        </h3>
    
    </div>
    `
}

function displayStackOverflowData(data) {
    searchData = data

    const results = data.items.map((item, index) => renderStackOverflowResults(item));
    $('.js-stackoverflow').html(results);
}