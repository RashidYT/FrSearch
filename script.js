var textbox = document.querySelector('.textbox');
textbox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        window.location.href = 'https://www.google.com/search?q=' + textbox.value;
    }
});