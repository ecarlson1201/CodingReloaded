function handleFormSubmit() {
    SEARCH.submit(function (event) {
        event.preventDefault();
        const queryTarget = `${LANGUAGE.val() + ' ' + TERM.val()}`;

        query = queryTarget;
        RESULTS.html('')
        getDataFromApi(query, displayYoutubeSearchData);
        getDataFromStackOverflow(query, displayStackOverflowData);
        getDataFromMozilla(query, displayMozillaData);
        getDataFromReddit(TERM.val(), displayRedditData);
        SECTION.removeClass('hidden');
    });
};

handleFormSubmit();