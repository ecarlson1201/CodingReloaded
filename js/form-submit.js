function handleFormSubmit() {
    SEARCH.submit(function (event) {
        event.preventDefault();
        const queryTarget = `${LANGUAGE.val() + ' ' + TERM.val()}`;

        HEADER.toggleClass('hidden');
        NEW_SEARCH.toggleClass('hidden');
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

function newSearch(){
    NEW_SEARCH.toggleClass('hidden');
    HEADER.toggleClass('hidden');
    SECTION.toggleClass('hidden');
    TERM.val('');
};

handleFormSubmit();