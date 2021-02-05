const slider = $(".slider-box");
slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: false,
    enterPadding: 0,
    autoplaySpeed: 3000,
    speed:500,
    // vertical: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 1008,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            // settings: "unslick"
        }

        ]
  });
const partner_slider = $(".partner-item");
partner_slider.slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots:true,
    autoplaySpeed: 5000,
    speed:1000,
    cssEase: 'linear',
    pauseOnFocus: false, 
    pauseOnHover: false,
    rows: 1,
    
    // swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 1008,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
                }

            // settings: "unslick"
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
                }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
        }
        ]
  });
  

  const service_item = $(".service-item");
  service_item.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      dots:false,
      autoplaySpeed: 5000,
      speed:1000,
    //   cssEase: 'linear',
    //   pauseOnFocus: false, 
    //   pauseOnHover: false,
      rows: 1,
      
      // swipeToSlide: true,
      responsive: [
          {
              breakpoint: 1200,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1
              }
          },
          {
              breakpoint: 1008,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              }
          },
          {
              breakpoint: 800,
              settings: "unslick"
          }
  
          ]
    });

    const about_item = $(".about-slideshow");
    about_item.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        dots:false,
        autoplaySpeed: 2000,
        speed:1000,
        focusOnSelect:true,
      //   cssEase: 'linear',
      //   pauseOnFocus: false, 
      //   pauseOnHover: false,
        rows: 1,
        
        // swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 1008,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: "unslick"
            }
    
            ]
      });
  
      $('.worker-bio-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slick-worker-list'
      });


    const worker_list = $(".slick-worker-list");
    worker_list.slick({
     centerMode: true,
     centerPadding: '0px',
     slidesToShow: 5,
     speed: 1500,
     index: 2,
     asNavFor: '.worker-bio-list',
    //  cssEase: 'linear',
    //  variableWidth: true,
    // variableHeight: true,
     focusOnSelect:true,
     responsive: [{
       breakpoint: 768,
       settings: {
         arrows: true,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 3
       }
     }, {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '40px',
         slidesToShow: 1
       }
     }]
      });


// to top 

$('.works-box').hover(function(){
    cover = $(this).find('.cover-box')
    cover.slideToggle('slow')

})

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('loading').style.visibility="hidden";
        },500);
    }
  }

// $(document).ready(function() {
//     $('#loading').fadeOut();
//     // $('#loading').hide();
// });

// $(window).load(function() {
// console.log('salam');

//     $('#loading').fadeOut(3000);
// });

$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite:false,
    arrows: false,
    dots: false,
    autoplaySpeed: 500,
    speed:1000,
    centerMode: true,
    // autoplay:true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"> < </button>',
    nextArrow:'<button class="slick-next"> > </button>',
    
    //         responsive: [                        
    //             {
    //               breakpoint: 576,
    //               settings: {
    //                 centerMode: false,
    //                 variableWidth: false,
    //               }
    //             },
    //         ]
  });
  
  
  var imgs = $('.slider img');
  imgs.each(function(){
    var item = $(this).closest('.item');
    item.css({
      'background-image': 'url(' + $(this).attr('src') + ')', 
      'background-position': 'center',            
      '-webkit-background-size': 'cover',
      'background-size': 'cover', 
    });
    $(this).hide();
  });

  // check customer type
  $('input[type=radio]').change(function(){
    radVal = $(this).val()
    if (radVal == '1'){
      $('.company_name_box').hide()
    }
    else{
      $('.company_name_box').show()
    }
  })
 

  $(document).ready(function() {  
    $(".form-input").blur(function(){ 
        if($(this).val()=='') {  
            $(this).css('border', 'solid 2px red');  
        } 
        else { 
              
            // If it is not blank. 
            $(this).css('border', '1px solid #D2D3D3');     
        }     
    }) .trigger("focusout"); 
}); 
$(".form-input").on('input', function() {
  console.log('ok');
  if($(this).val()=='') {  
    $(this).css('border', 'solid 2px red');  
} 
else { 
      
    // If it is not blank. 
    $(this).css('border', '1px solid #D2D3D3');     
}     
 })