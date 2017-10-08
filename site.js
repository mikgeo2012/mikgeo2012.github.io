(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var header = document.querySelector('header');
        var headerHeight = header.scrollHeight;
        window.addEventListener('scroll', function(e) {
            if (document.body.scrollTop > headerHeight) {
                document.querySelector('#stickyHeader').style.display = 'block';
                // header.style.display = 'none';
            } else {
                document.querySelector('#stickyHeader').style.display = 'none';
                // header.style.display = 'block';
            }            
        });
    });
})();