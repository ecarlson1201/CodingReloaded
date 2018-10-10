function handleFormSubmit() {
    SEARCH.submit(function (event) {
        event.preventDefault();
        const queryTarget = `${LANGUAGE.val() + ' ' + TERM.val()}`

        query = queryTarget
        getDataFromApi(query, displayYoutubeSearchData)
    })
}

handleFormSubmit();