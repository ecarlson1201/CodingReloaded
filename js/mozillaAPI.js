function getDataFromMozilla(searchTerm, callback) {
    console.log('hello world')
    const query = {
        url: MOZILLA_SEARCH_URL,
        headers: {
            'Access-Control-Allow-Origin': true,
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'no-cache',
            'pragma': 'no-cache',
            'upgrade-insecure-requests': 1,
        },
        contentType: 'application/json',
        data: {
            q: searchTerm
        }
    }
    $.ajax(query)
    .done(callback)
    .fail(function(fail){
        console.log(fail)
    })
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