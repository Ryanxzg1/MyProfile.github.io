

//  about 
 

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css ({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron p').css ({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });
  
})