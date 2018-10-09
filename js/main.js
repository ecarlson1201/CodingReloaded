function handleFormSubmit() {
    SEARCH.submit(function (event) {
        event.preventDefault();
        console.log(`${LANGUAGE.val() + ' ' + TERM.val()}`)
    })
}

handleFormSubmit();