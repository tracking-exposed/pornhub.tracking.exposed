function removeHeaderFooter(millis) {
    window.setTimeout(function() {
        $('header').fadeOut(millis / 2);
        $('footer').fadeOut(millis / 2);
    }, millis / 2)
}

function restoreHeaderFooter(millis) {
    $('header').fadeIn(millis);
    $('footer').fadeIn(millis);
    return true; // this is for single execution pattern, removen't.
}