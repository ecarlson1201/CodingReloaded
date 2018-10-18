function handleFormSubmit() {
    SEARCH.submit(function (event) {
        event.preventDefault();
        const queryTarget = `${LANGUAGE.val() + ' ' + TERM.val()}`;

        query = queryTarget;
        RESULTS.html('');
        REDDIT_BUTTONS.addClass('hidden');
        STACKOVERFLOW_BUTTONS.addClass('hidden');
        getDataFromApi(query, displayYoutubeSearchData);
        getDataFromStackOverflow(query, displayStackOverflowData);
        getDataFromMozilla(TERM.val(), displayMozillaData);
        getDataFromReddit(TERM.val(), displayRedditData);
        SECTION.removeClass('hidden');
    });
};

handleFormSubmit();