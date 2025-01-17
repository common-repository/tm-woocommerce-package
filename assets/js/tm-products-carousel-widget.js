( function ( $ ) {
	$( '.tm-products-carousel-widget-container' ).each( function() {
		var swiper             = null,
			uniqId             = $( this ).data( 'uniq-id' ),
			slidesPerView      = parseFloat( $( this ).data( 'slides-per-view' ) ),
			slidesPerGroup     = parseFloat( $( this ).data( 'slides-per-group' ) ),
			slidesPerColumn    = parseFloat( $( this ).data( 'slides-per-column' ) ),
			spaceBetweenSlides = parseFloat( $( this ).data( 'space-between-slides' ) ),
			durationSpeed      = parseFloat( $( this ).data( 'duration-speed' ) ),
			swiperLoop         = $( this ).data( 'swiper-loop' ),
			freeMode           = $( this ).data( 'free-mode' ),
			grabCursor         = $( this ).data( 'grab-cursor' ),
			mouseWheel         = $( this ).data( 'mouse-wheel' ),
			breakpointsList    = {
				992: {
					slidesPerView: Math.ceil( slidesPerView * 0.75 ),
					spaceBetween:  Math.ceil( spaceBetweenSlides * 0.75 )
				},
				768: {
					slidesPerView: Math.ceil( slidesPerView * 0.5 ),
					spaceBetween:  Math.ceil( spaceBetweenSlides * 0.5 )
				},
				480: {
					slidesPerView: Math.ceil( slidesPerView * 0.25 ),
					spaceBetween:  Math.ceil( spaceBetweenSlides * 0.25 )
				}
			},
			customBreakpoints  = $( this ).data( 'custom-breakpoints' );

		if ( '' !== customBreakpoints && 'object' === typeof customBreakpoints ) {
			breakpointsList = customBreakpoints;
		}

        swiper = new Swiper( '#' + uniqId, {
                slidesPerView:       slidesPerView,
                slidesPerGroup:      slidesPerGroup,
                slidesPerColumn:     slidesPerColumn,
                spaceBetween:        spaceBetweenSlides,
                speed:               durationSpeed,
                loop:                swiperLoop,
                freeMode:            freeMode,
                grabCursor:          grabCursor,
                paginationFractionRender: true,
                mousewheelControl:   mouseWheel,
                paginationClickable: true,
                navigation: {
                    nextEl: '#' + uniqId + '-next',
                    prevEl: '#' + uniqId + '-prev',
                },
                pagination: {
                    el:  '#' + uniqId + '-pagination',
                    type: 'bullets'
                },
                //threshold:           5,
                on: {
                    init: function () {
                        getSwiperActiveSlideNumber( this );

                        $( '#' + uniqId + '-next' ).css( {
                            'display': 'block'
                        } );
                        $( '#' + uniqId + '-prev' ).css( {
                            'display': 'block'
                        } );
                    },
                    touchStart: function () {
                        getSwiperActiveSlideNumber( this );
                    },
                    touchEnd: function () {
                        getSwiperActiveSlideNumber( this );
                    },
                    slideChange: function () {
                        getSwiperActiveSlideNumber( this );
                    },
                    transitionStart: function () {
                        getSwiperActiveSlideNumber( this );
                    },
                    slideChangeTransitionEnd: function () {
                        getSwiperActiveSlideNumber( this );
                    }
                },
                breakpoints: breakpointsList
            },
		);

	} );

	$( '.tm-products-carousel-widget-sale-end-date[data-countdown]' ).each( function() {
		var $this = $( this ),
		finalDate = $( this ).data( 'countdown' ),
		format    = $( this ).data( 'format' );
		$this.countdown( finalDate, function( event ) {
			$this.html( event.strftime( format ) );
		} );
	} );
} )( jQuery );
