$(function () {
    
    var post = {}, currentQuote = '', currentAuthor = '';

    function getQuote() {
        $.ajax({
            url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function (data) {
                post = data.shift();
                currentAuthor = post.title;
                currentQuote = post.content.replace(/<p>/g, '').replace(/<\/p>/g, '');
                $('#quote-author').html(currentAuthor);
                $('#quote-content').html(currentQuote);
            },
            cache: false
        });
    }

    getQuote();
    $('#get-another-quote-button').on('click', getQuote);
    $('#tweet-quote').on('click', function () {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freeCodeCamp_RandomQuoteMachine&text=' + encodeURIComponent(currentQuote + '- ' + currentAuthor));
    });
});
