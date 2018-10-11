function getDataFromMozilla(searchTerm, callback) {
    const query = {
        q: searchTerm,
    }
    $.getJSON(MOZILLA_SEARCH_URL, query, callback)
}

function renderMozillaResults(result){
    return `
    <div>
        <h3>
        <a class='js-result-name' href=${result.link}' target='_blank'>${result.title}</a></h2>
        </h3>
    </div>
    `
}

function displayMozillaData(data) {
    console.log(data)
    searchData = data
    const results = data.items.map((item, index) => renderMozillaResults(item));
    $('.js-mozilla').html(results);
}