$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1147876134',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '1147876134.1677ed0.939ce2b7bd864cfb8ec95555de84759d',
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
