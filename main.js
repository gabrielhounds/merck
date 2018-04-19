$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
	var t = TweenMax;
	var tl = new TimelineMax( { paused : true });

	var dom = '';

	var owlCta = $('#owlCta');
	var foxCta = $('#foxCta');

	console.log($('.leaf').length);

	var topRight = [];
	var topLeft = [];
	var bottomRight = [];
	var bottomLeft = [];

	var _width  = window.innerWidth;
	var _height = window.innerHeight;

	if (window.matchMedia('( orientation : portrait )').matches) {

		$('.leaves').css({ opacity: 0 });

		leavesSVG = $('.p_leaves');

		$('.p_leaves .p_leaf').each( function(i, el){
			if ( $(this).offset().top > _height / 2  ) {
				topRight.push(el);
			} else {
				topLeft.push(el);
			}
		});

	} else {

		leavesSVG = $('.leaves');

		$('.p_leaves').css({ opacity: 0 });

		$('.leaves .leaf').each( function(i, el){
			if ( $(this).offset().top > _height / 2  ) {
				if ( $(this).offset().left > _width / 2  ) {
					bottomRight.push(el);
					//t.set(this, {opacity:0})
				} else {
					bottomLeft.push(el);
					//t.set(this, {opacity:0})
				}
			} else {
				if ( $(this).offset().left > _width / 2  ) {
					topRight.push(el);
					//t.set(this, {opacity:0})
				} else {
					topLeft.push(el);
					//t.set(this, {opacity:0})
				}
			}
		});
	}





	tl.add('begin')
	  .staggerFrom(topLeft,    0.9, {opacity:1, y:'-=900', x:'-=900', rotation:'+=180deg', ease:Power3.easeOut}, 0.2)
	  .staggerFrom(topRight,   0.9, {opacity:1, y:'-=900', x:'+=900', rotation:'-=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .staggerFrom(bottomLeft,    0.9, {opacity:1, y:'+=900', x:'-=900', rotation:'+=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .staggerFrom(bottomRight,   0.9, {opacity:1, y:'+=900', x:'+=900', rotation:'-=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .to(topRight, 	0.5, {y:'-=100', x:'+=100', ease:Power3.easeOut}, '+=1.0')
	  .to(topLeft,  	0.5, {y:'-=100', x:'-=100', ease:Power3.easeOut}, '-=0.5')
	  .to(bottomLeft,   0.5, {y:'+=100', x:'-=100', ease:Power3.easeOut}, '-=0.5')
	  .to(bottomRight,  0.5, {y:'+=100', x:'+=100', ease:Power3.easeOut}, '-=0.5')
	  .to(leavesSVG, 1.0, {scale:5, ease:ExpoScaleEase.config(1, 5)}, '-=0.5')
	  //.to('.txt1',   0.4, {scale:10, opacity:0, y:'+=800', ease:ExpoScaleEase.config(1, 10)}, '-=0.8')
	  .to('.txt1',   0.4, {opacity:0, y:'+=10', }, '-=0.8')
	  //.set(leavesSVG, {autoAlpha:0})
	  .set($('.leaves'), {autoAlpha:0})
	  .set($('.p_leaves'), {autoAlpha:0})
	  .add('forestIn')
	  .from('.txt2', 	   	0.8, {scale:0,   opacity:0, ease:Power3.easeOut}, '-=0.1')
	  .from('.foreground', 	1.5, {scale:0,   opacity:0, transformOrigin:'center bottom ', ease:Expo.easeOut}, '-=0.6')
	  .from('.midground',  	1.5, {scale:0,   opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, '-=1.3')
	  .from('.background', 	1.5, {scale:0,   opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, '-=1.3')
	  .from('.pineTree',   	1.5, {scale:0.5, opacity:0, x:'+=600', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')
	  .from('.owlTree',    	1.5, {scale:0.5, opacity:0, x:'-=600', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')
	  .from('.bush',       	1.5, {scale:0.5, opacity:0, x:'-=600', y:'+=100', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.leftTree',   	1.5, {scale:0.5, opacity:0, x:'-=600', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.rightTree',  	1.5, {scale:0.5, opacity:0, x:'+=600', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.flower',     	1.5, {scale:0.5, opacity:0, x:'-=600', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')
	  .from('.shroomLeft', 	1.0, {scale:0.5, opacity:0, y:'+=200', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.shroomRight', 1.0, {scale:0.5, opacity:0, y:'+=200', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')
	  .from('.owlCta', 	    0.4, {scale:0.0, opacity:0, transformOrigin:'left bottom', ease:Back.easeOut}, '-=0.5')
	  .from('.foxCta',      0.4, {scale:0.0, opacity:0, transformOrigin:'left bottom', ease:Back.easeOut}, '-=0.2')
	  .add('end');


	  $(owlCta).mouseover( function() {
	  	$(this).addClass('active');
	  	$(this).children().addClass('active');
	  	t.to('.txt2', 0.3, {opacity:0});
	  	t.to('.txt3', 0.3, {opacity:1});
	  }).mouseout( function(){
	  	$(this).removeClass('active');
	  	$(this).children().removeClass('active');
	  	t.to('.txt2', 0.3, {opacity:1});
	  	t.to('.txt3', 0.3, {opacity:0});
	  }).click( function() {

	  });

	  $(foxCta).mouseover( function() {
	  	$(this).addClass('active');
	  	$(this).children().addClass('active');
	  	t.to('.txt2', 0.3, {opacity:0});
	  	t.to('.txt3', 0.3, {opacity:1});
	  }).mouseout( function(){
	  	$(this).removeClass('active');
	  	$(this).children().removeClass('active');
	  	t.to('.txt2', 0.3, {opacity:1});
	  	t.to('.txt3', 0.3, {opacity:0});
	  }).click( function() {

	  });













	//tl.seek('end');
	tl.play();

}