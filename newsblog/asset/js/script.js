


$(document).ready(function(){

    $(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
            $('.navigation').addClass("nav-fix-top");
            $('.menu-hide').hide();
            $('.scroll-nav-btn').show();
            $('.navigation').css({'height': '50px'});
            $('.navigation .logo a h3').css({'fontSize': '60px', 'lineHeight': '30px'})

		} else {
            $('.navigation').removeClass("nav-fix-top");
            $('.menu-hide').show();
            $('.scroll-nav-btn').hide();
            $('.navigation').css({'height': '90px'});
            $('.navigation .logo a h3').css({'fontSize': '90px', 'lineHeight': '65px'})
		}
	}); 

    $('.scroll-nav-btn button').click(function(){
        $('.scroll-header').css({'width': '240px'});
        $('.overlay').css({
            'background': 'rgba(0, 0, 0, 0.55)',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'zIndex': '998',  
            'top': '0',
            'right': '0'      
        });
        
    });


    $('.cross').click(function(){
        $('.scroll-header').css({'width': '0px'});
        $('.overlay').css({
            'width': '0',
            'height': '0'
        });
    });
    $('.overlay').click(function(){
        $('.scroll-header').css({'width': '0px'});
       $(this).css({
           'width': '0',
           'height': '0'
       });
    })

   

    
     

   

})








