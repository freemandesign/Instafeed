$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7604670795',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '7604670795.1677ed0.0c7a90f37f6348a898450111d31a8a71',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });

    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
