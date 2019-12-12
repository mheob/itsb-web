;
(function () {

	'use strict';

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};

	// Animations

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, {
			offset: '85%'
		});
	};


	var burgerMenu = function () {

		$('.js-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});


	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function () {

		$(document).on('click', function (e) {
			var container = $("#aside, .js-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-nav-toggle').removeClass('active');

				}

			}
		});

		$(window).scroll(function () {
			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-nav-toggle').removeClass('active');

			}
		});

	};

	var sliderMain = function () {

		$('#banner .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

		});

	};

	var stickyFunction = function () {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function () {
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}


		});

		$('.sticky-parent').css('height', h);

		$("#sticky_item").stick_in_parent();

	};


	var typed = function () {
		//------- Typed --------// 
		var typed = new Typed('#typed-slide-1', {
			stringsElement: '#typed-strings-slide-1',
			backSpeed: 40,
			typeSpeed: 40,
			loop: true
		});

		//------- Typed --------// 
		var typed = new Typed('#typed-slide-2', {
			stringsElement: '#typed-strings-slide-2',
			backSpeed: 40,
			typeSpeed: 40,
			loop: true
		});
	}


	var menuactive = function () {
		$('#aside #main-menu ul li a').on('click', function (e) {
			$('#aside #main-menu ul li.active').removeClass('active');
			$(this).parent('li').addClass('active');
		});
	}


	var carusel_clients = function () {
		//------- Owl Carusel  js --------//
		$('.testi_slider').owlCarousel({
			loop: true,
			margin: 30,
			items: 1,
			nav: false,
			autoplay: 2500,
			smartSpeed: 1500,
			dots: false,
			responsiveClass: true,
			navText: ["<i class='lnr lnr-arrow-left'></i>", "<i class='lnr lnr-arrow-right'></i>"]
		});
	}

	var carusel_blog = function () {
		//------- Owl Carusel  js --------//
		$('.blog_slider').owlCarousel({
			loop: true,
			items: 2,
			nav: false,
			autoplay: 3500,
			smartSpeed: 2500,
			dots: false,
			responsiveClass: true,
			responsive: {
		        0:{
		          items: 1
		        },
		        480:{
		          items: 1
		        },
		        769:{
		          items: 2
		        }
		    }
			
		});
	}

	var back_to_top = function () {
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
	}

	// Document on load.
	$(function () {
		fullHeight();
		contentWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
		sliderMain();
		stickyFunction();
		typed();
		menuactive();
		carusel_clients();
		carusel_blog();
		back_to_top();
	});

}());


/*------------------
	Isotope Filter
--------------------*/
var $container = $('.work-gallery');
	$container.imagesLoaded().progress( function() {
		$container.isotope();
	});

$('.work-filter li').on('click', function(){
	$(".work-filter li").removeClass("active");
	$(this).addClass("active");
	var selector = $(this).attr('data-filter');
	$container.imagesLoaded().progress( function() {
		$container.isotope({
			filter: selector,
		});
	});
	return false;
});


//------- Preloader --------//
$(window).load(function() {
  $(".loading").addClass("spin");

  setTimeout(function() {
    var currentPositon = $(".loading").css("transform");
    console.log(currentPositon)
    $(".loading").addClass("class").css("transform", currentPositon).css("transform", "none")
    $(".loading").animate({

    }, 500, function() {
      increaseWidth();
    });
  }, 1985);

  function increaseWidth() {
    $(".loading").animate({

      width: "+=100%",
    }, 500, function() {
      slide();
      removeLine();
      moveTextRight();
      moveTextLeft();
    });
  }

  function removeLine() {
    $(".preloader-wrapper, .preloader-wrapper-inner").animate({

      width: "0%",
    }, 500, function() {});
  }

  function goUp() {
    $(".up").show();
    $(".up").animate({
      top: "-=50%"
    }, 500, function() {
      $(this).hide();
    });
  }

  function goDown() {
    $(".down").show();
    $(".down").animate({
      bottom: "-=50%"
    }, 500, function() {
      $(this).hide();
    });
  }

  function slide() {
    goUp();
    goDown();
  }

});
