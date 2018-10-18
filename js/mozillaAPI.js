function getDataFromMozilla(searchTerm, callback) {
    const query = {
        q: searchTerm,
    };
    $.getJSON(MOZILLA_SEARCH_URL, query, callback)
        .error(function () { alert("error"); });
};

function renderMozillaResults(result) {
    return `
    <div>
        <h3>
        <a class='js-result-name' href='https://developer.mozilla.org/en-US/docs/${result.slug}' target='_blank'>${result.title}</a></h2>
        </h3>
        <p>"...${result.excerpt}..."</p>
    </div>
    `;
};

function displayMozillaData(data) {
    searchData = data;
    MOZILLA_RESULTS.html('');

    if (data.documents.length > 0) {
        for (i = 0; i < 3; i++) {
            const results = searchData.documents[i];
            MOZILLA_RESULTS.append(renderMozillaResults(results));
        }
    }
    else {
        MOZILLA_RESULTS.html(`Oops, no results found for ${TERM.val()}.`)
    };
    
};