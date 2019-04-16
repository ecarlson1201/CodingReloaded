//handles display changes for modals
function displayModal() {
    $('.link').click(function (event) {
        MODAL.css('display', 'block')
        clicked = $('div.js-youtube-result > div').toArray().indexOf(this);
        renderModalVideo();
    });
    closeModal();
};

function closeModal() {
    $('span').click(function () {
        MODAL.css('display', 'none');
        PLAYER.prop('src', '');
    });
    MODAL.click(function () {
        MODAL.css('display', 'none');
        PLAYER.prop('src', '');
    });
};

function renderModalVideo() {
    PLAYER.prop('src', `https://www.youtube.com/embed/${modalData.items[clicked].id.videoId}`);
};