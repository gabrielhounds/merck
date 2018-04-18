$(document).ready(function(){
	init();
});

function init() {
	console.log('init');
	var t = TweenMax;
	var tl = new TimelineMax( { paused : true });

	console.log($('.leaf').length);

	var topRight = [];
	var topLeft = [];
	var bottomRight = [];
	var bottomLeft = [];

	var _width  = window.innerWidth;
	var _height = window.innerHeight;

	$('.leaf').each( function(i, el){
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

	tl.add('begin')
	  .staggerFrom(topLeft,    0.9, {opacity:1, y:'-=900', x:'-=900', rotation:'+=180deg', ease:Power3.easeOut}, 0.2)
	  .staggerFrom(topRight,   0.9, {opacity:1, y:'-=900', x:'+=900', rotation:'-=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .staggerFrom(bottomLeft,    0.9, {opacity:1, y:'+=900', x:'-=900', rotation:'+=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .staggerFrom(bottomRight,   0.9, {opacity:1, y:'+=900', x:'+=900', rotation:'-=180deg', ease:Power3.easeOut}, 0.2, 'begin')
	  .to(topRight, 	0.5, {y:'-=100', x:'+=100', ease:Power3.easeOut}, '+=1.0')
	  .to(topLeft,  	0.5, {y:'-=100', x:'-=100', ease:Power3.easeOut}, '-=0.5')
	  .to(bottomLeft,   0.5, {y:'+=100', x:'-=100', ease:Power3.easeOut}, '-=0.5')
	  .to(bottomRight,  0.5, {y:'+=100', x:'+=100', ease:Power3.easeOut}, '-=0.5')
	  .to('.leaves', 1.0, {scale:5, ease:ExpoScaleEase.config(1, 5)}, '-=0.5')
	  //.to('.txt1',   0.4, {scale:10, opacity:0, y:'+=800', ease:ExpoScaleEase.config(1, 10)}, '-=0.8')
	  .to('.txt1',   0.4, {opacity:0, y:'+=10', }, '-=0.8')
	  .set('.leaves', {autoAlpha:0})
	  .add('forestIn')
	  .from('.txt2', 0.8, {scale:0, opacity:0, ease:Power3.easeOut}, '-=0.1')

	  .from('.foreground', 1.5, {scale:0, opacity:0, transformOrigin:'center bottom ', ease:Expo.easeOut}, '-=0.6')
	  .from('.midground',  1.5, {scale:0, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, '-=1.3')
	  .from('.background', 1.5, {scale:0, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, '-=1.3')

	  .from('.pineTree',   1.5,  {x:'+=600',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')
	  .from('.owlTree',    1.5,  {x:'-=600',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')

	  .from('.bush',       1.5,  {x:'-=600',  y:'+=100', scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.leftTree',   1.5,  {x:'-=600',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.rightTree',  1.5,  {x:'+=600',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')

	  .from('.flower',     1.5,  {x:'-=600',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')

	  .from('.shroomLeft', 1.0,  {y:'+=200',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=1.0')
	  .from('.shroomRight', 1.0, {y:'+=200',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.8')

	  .from('.owlCta', 0.4, {scale:0.0, opacity:0, transformOrigin:'left bottom', ease:Back.easeOut}, '-=0.5')
	  .from('.foxCta', 0.4, {scale:0.0, opacity:0, transformOrigin:'left bottom', ease:Back.easeOut}, '-=0.2')

	  //.from('.grass',      1.5,  {scale:2.0, y:'+=100', transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.4')
	  //.from('.fox',        1.5,  {y:'+=20', x:'+=100', opacity:0, transformOrigin:'center bottom', ease:Expo.easeOut}, 'forestIn+=0.4')


	 /* .from('.pineTree',   0.8,  {x:'+=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.4')
	  .from('.leftTree',   0.8,  {x:'-=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.4')
	  .from('.flower',     0.8,  {x:'-=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.6')
	  .from('.owlTree',    1.2,  {x:'-=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.3')
	  .from('.bush',    1.2,  {x:'-=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.5')

	  .from('.shroomLeft',   1.2,  {x:'-=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.5')
	  .from('.shroomRight',  1.2,  {x:'+=300',  scale:1.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.5')


	  .from('.rightTree',  0.8,  {x:'+=900',  scale:0.5, opacity:0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.4')
	  .from('.grass',  0.8,  {scale:4.0, transformOrigin:'center bottom', ease:Power3.easeOut}, 'forestIn+=0.155')
	  .from('.fox',  1.2,    {x:'+=100',  transformOrigin:'center bottom', ease:Power1.easeOut}, 'forestIn+=0.15')




	  /*.from('.grass',     0.8, {y:'+=300', ease:Power3.easeOut}, '-=0.6')
	  .from('.leftTree',  1.2, {x:'-=600', scale:0.5, transformOrigin:'bottom', ease:Expo.easeOut}, '-=0.8')
	  .from('.owlTree',   1.2, {x:'-=300', scale:0.5, transformOrigin:'bottom', ease:Expo.easeOut}, '-=1.0')
	  .from('.rightTree', 1.2, {x:'+=300', scale:0.5, transformOrigin:'bottom', ease:Expo.easeOut}, '-=1.0')
	  .from('.pineTree', 1.2, {x:'+=300',  scale:0.5, transformOrigin:'bottom', ease:Expo.easeOut}, '-=1.0')*/

	  .add('end');



	tl.play();

}