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
        <a class='js-result-name' href='https://developer.mozilla.org/en-US/docs/${result.slug}' target='_blank'>${result.title}</a></h2>
        </h3>
        <p>"...${result.excerpt}..."</p>
    </div>
    `
}

function displayMozillaData(data) {
    $('.js-mozilla').html(renderMozillaResults(data.documents[0]));
}