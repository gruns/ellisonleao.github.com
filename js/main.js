(function() {
    $(document).ready(function() {
       $.ajax({
          url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('https://medium.com/feed/@ellisonleao/'),
          dataType : 'json',
          success  : function (data) {
            if (data.responseData.feed && data.responseData.feed.entries) {
                var ul = $('.posts');
                var entries = data.responseData.feed.entries.slice(0, 3);
                $.each(entries, function (i, e) {
                    ul.append('<li><p class="post"><a target="_blank" href="'+ e.link +'">' + e.title + '</a></p></li>');
                });
            }
          }
        });
    });
})($);
