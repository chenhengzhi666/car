$(function() {
	$(document).on('touchstart', function(e) {
		e.preventDefault();
	});
	$('.swiper-wrapper').css({
		width: $(window).width(),
		height: $(window).height()
	});
	$('<div class="mark"><div>Loading...<span id="jdt"><i style="display: inline-block; background: seagreen; height: 0.3rem; width: 0%; position: absolute;"></i></span><span id="num">0%</span></div></div>').appendTo('body');
			$('.mark').css({width: $(window).width(), height: $(window).height(),background:'rgba(0,0,0,.8)',position:'absolute',zIndex:100,top:0,color:'#fff',textAlign:'center',fontSize:'0.68rem'});
			$('.mark div').css({marginTop:'60%'});
			$('#jdt').css({width:'70%',height:'0.3rem',border:'1px solid red',borderRadius:'10px' ,display:'inline-block',overflow:'hidden',position:'relative',textAlign:'left'});
			$('#num').css({fontSize:'0.36rem',marginLeft:'2%'});
	var arr = [
		"images/img/car/Rouge Flamme.0000.png",
		"images/img/car/Rouge Flamme.0001.png",
		"images/img/car/Rouge Flamme.0002.png",
		"images/img/car/Rouge Flamme.0003.png",
		"images/img/car/Rouge Flamme.0004.png",
		"images/img/car/Rouge Flamme.0005.png",
		"images/img/car/Rouge Flamme.0006.png",
		"images/img/car/Rouge Flamme.0007.png",
		"images/img/car/Rouge Flamme.0008.png",
		"images/img/car/Rouge Flamme.0009.png",
		"images/img/car/Rouge Flamme.0010.png",
		"images/img/car/Rouge Flamme.0011.png",
		"images/img/car/Rouge Flamme.0012.png",
		"images/img/car/Rouge Flamme.0013.png",
		"images/img/car/Rouge Flamme.0014.png",
		"images/img/car/Rouge Flamme.0015.png",
		"images/img/car/Rouge Flamme.0016.png",
		"images/img/car/Rouge Flamme.0017.png",
		"images/img/car/Rouge Flamme.0018.png",
		"images/img/car/Rouge Flamme.0019.png",
		"images/img/car/Rouge Flamme.0020.png",
		"images/img/car/Rouge Flamme.0021.png",
		"images/img/car/Rouge Flamme.0022.png",
		"images/img/car/Rouge Flamme.0023.png",
		"images/img/car/Rouge Flamme.0024.png",
		"images/img/car/Rouge Flamme.0025.png",
		"images/img/car/Rouge Flamme.0026.png",
		"images/img/car/Rouge Flamme.0027.png",
		"images/img/car/Rouge Flamme.0028.png",
		"images/img/car/Rouge Flamme.0029.png",
		"images/img/car/Rouge Flamme.0030.png",
		"images/img/car/Rouge Flamme.0031.png",
		"images/img/car/Rouge Flamme.0032.png",
		"images/img/car/Rouge Flamme.0033.png",
		"images/img/car/Rouge Flamme.0034.png",
		"images/img/car/Rouge Flamme.0035.png",
		"images/img/car/Rouge Flamme.0036.png",
		"images/img/car/Rouge Flamme.0037.png",
		"images/img/car/Rouge Flamme.0038.png",
		"images/img/car/Rouge Flamme.0039.png",
		"images/img/car/Rouge Flamme.0040.png",
		"images/img/car/Rouge Flamme.0041.png",
		"images/img/car/Rouge Flamme.0042.png",
		"images/img/car/Rouge Flamme.0043.png",
		"images/img/car/Rouge Flamme.0044.png",
		"images/img/car/Rouge Flamme.0045.png",
		"images/img/car/Rouge Flamme.0046.png",
		"images/img/car/Rouge Flamme.0047.png",
		"images/img/car/Rouge Flamme.0048.png",
		"images/img/car/Rouge Flamme.0049.png",
		"images/img/car/Rouge Flamme.0050.png",
		"images/img/car/Rouge Flamme.0051.png",
		"images/img/car/Rouge Flamme.0052.png",
		"images/img/car/Rouge Flamme.0053.png",
		"images/img/car/Rouge Flamme.0054.png",
		"images/img/car/Rouge Flamme.0055.png",
		"images/img/car/Rouge Flamme.0056.png",
		"images/img/car/Rouge Flamme.0057.png",
		"images/img/car/Rouge Flamme.0058.png",
		"images/img/car/Rouge Flamme.0059.png",
		"images/img/car/Rouge Flamme.0060.png",
		"images/img/car/Rouge Flamme.0061.png",
		"images/img/car/Rouge Flamme.0062.png",
		"images/img/car/Rouge Flamme.0063.png",
		"images/img/car/Rouge Flamme.0064.png",
		"images/img/car/Rouge Flamme.0065.png",
		"images/img/car/Rouge Flamme.0066.png",
		"images/img/car/Rouge Flamme.0067.png",
		"images/img/car/Rouge Flamme.0068.png",
		"images/img/car/Rouge Flamme.0069.png",
		"images/img/car/Rouge Flamme.0070.png",
		"images/img/car/Rouge Flamme.0071.png",
		"images/arrow.png",
		"images/bigcar.png",
		"images/bigcarlight.png",
		"images/car.png",
		"images/eightbc.png",
		"images/fivencs.png",
		"images/fourbc.png",
		"images/hand.png",
		"images/hidden1.png",
		"images/hidden2.png",
		"images/hidden3s.png",
		"images/hidden4.png",
		"images/left.png",
		"images/music.png",
		"images/pic1.png",
		"images/pic2.png",
		"images/pic3.png",
		"images/pic4.png",
		"images/right.png",
		"images/rotate.png",
		"images/rotate1.png",
		"images/round.png",
		"images/sevenpic1.png",
		"images/sevenpic2.png",
		"images/sevenpic3.png",
		"images/sixpic1s.png",
		"images/sun.png",
		"images/suna.png",
		"images/sunb.png",
		"images/sunc.png",
		"images/sund.png",
		"images/threepic1.png",
		"images/threepic2s.png",
		"images/threetext.png",
		"images/threetext1.png",
		"images/topdir.png",
		"images/twoback.png",
		"images/twocar.png",
		"images/twocircle.png",
		"images/twopic1.png",
		"images/twopic2.png",
		"images/twotext.png",
	]
	var imgLeng = 0;
		var time = setInterval(function(){
			var makeImg = new Image();
			makeImg.src = arr[i];
			makeImg.onload = function() {
				imgLeng++;
				$('#num').html(parseInt(imgLeng);
				$('#jdt i').css({width:imgLeng*100/114+'%'});
				if(imgLeng == 114) {
					$('#audio1').get(0).play();
					$('#num').html('100%');
					$('#jdt').css({width:'100%'});
					$('.mark').remove();
					clearInterval(time);
				}
			}
		},10);
	
	
	var flag1 = true;
	$('#music').on('touchstart', function() {
		flag1 = !flag1;
		if(flag1) {
			$('#audio1').get(0).play();
			$('#music').css('animation', 'move3 2s 0s linear infinite');
		} else {
			$('#audio1').get(0).pause();
			$('#music').css('animation-play-state', 'paused');
		}
	});
	var flag2 = true;
	$('.page3 .p1').on('touchstart', function() {
		flag2 = !flag2;
		$('.page3 .img4').css('display', 'none');
		if(flag2) {
			$('.page3 .bigcar').animate({
				left: '-2.65rem',
				top: '3.4rem'
			}, 300);
		} else {
			$('.page3 .bigcar').animate({
				left: '0.6rem',
				top: '1.4rem'
			}, 300);
		}
	});

	var flag3 = true;
	$('.page3 .p2').on('touchstart', function() {
		flag3 = !flag3;
		$('.page3 .img4').css('display', 'none');
		if(flag3) {
			$('.page3 .img5').css('display', 'none');
		} else {
			$('.page3 .img5').css('display', 'block');
		}
	});

	var flag4 = true;
	$('.page3 .p3').on('touchstart', function() {
		flag4 = !flag4;
		$('.page3 .img4').css('display', 'none');
		if(flag4) {
			$('.page3 .bigcar').animate({
				left: '-2.65rem',
				top: '3.4rem'
			}, 300);
		} else {
			$('.page3 .bigcar').animate({
				left: '-4rem',
				top: '1rem'
			}, 300);
		}
	});
	
	$('.page5 .img1').on('touchstart', function(){
		$(this).fadeOut(300);
		$('.page5 .img3').fadeOut(300);
		$('.page5 .img6').css('display','none');
		$('.page5>.img7 ,.page5>.img8').css('display','block');
		setTimeout(function(){$('.page5>.img7,.page5>.img8').fadeOut(300);},1500);
		setTimeout(function(){$('.page5>.img9 ,.page5>.img10').css('display','block');},1000);
		setTimeout(function(){$('.page5>.img9 ,.page5>.img10').fadeOut(300);},2800);
		setTimeout(function(){$('.page5>.img3 ,.page5>.img1').fadeIn(300);},3100);
	});
	
	$('.page6 .p1').on('touchstart', function(){
		$('#markB, .page6>.img2, .page6>.p1').css('display','none');
	});
	
	var flag5 = true;
	$('.page7 .img2').on('touchstart', function(){
		$('.page7 .img4').css('display','none');
		flag5 = !flag5;
		if(flag5){
			$('#audio2').get(0).pause();
			$('#audio1').get(0).play();
			$('#music').css('animation', 'move3 2s 0s linear infinite');
		}else{
			$('#audio1').get(0).pause();
			$('#audio2').get(0).play();
			$('#music').css('animation-play-state', 'paused');
		}
		
	});
	//初始化swiper
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		//初始化时隐藏元素并在需要的时刻开始动画。
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if(swiper.activeIndex == 3) {
				var flag5 = false;
				var timer1 = null;
				var i = 0
				$('.page4 .img1').on('touchstart', function() {
					clearInterval(timer1)
					flag5 = !flag5;
					if(flag5) {
						
						timer1 = setInterval(function() {
							i++;
							if(i > 71) {
								i = 0;
							}
							$('#box img').eq(i).show().siblings().hide();
						}, 100);
					}else{
						clearInterval(timer1);
					}

				});
				var m = 0;
				$('.page4 .img2').on('touchstart', function() {
					m++;
					if(m > 2){
						m = 2;
					}
					if(m == 1){
						$('#box').css('transform','scale(1.5)');
					}else{
						$('#box').css('transform','scale(2)');
					}
					
				});
				$('.page4 .img3').on('touchstart', function() {
					m--;
					if(m < 0){
						m = 0;
					}
					if(m == 1){
						$('#box').css('transform','scale(1.5)');
					}else{
						$('#box').css('transform','scale(0.5)');
					}
					
				});
				
				var startX, endX, a = 0,
					b = 0,
					n = 0;
				$(document).on('touchstart', function(e) {
					startX = e.originalEvent.touches[0].pageX;
				});
				$(document).on('touchmove', function(e) {
					endX = e.originalEvent.touches[0].pageX;
					a = parseInt((endX - startX) / 10);
					if(a > b) {
						n--;
						if(n > 71) {
							n = 0;
						}
						if(n < 0) {
							n = 71;
						}
					} else if(a == b) {
						n = n;
					} else {
						n++;
						if(n > 71) {
							n = 0;
						}
						if(n < 0) {
							n = 71;
						}
					}
					b = a;
					$('#box img').eq(n).show().siblings().hide();
				});

			}

		}

	});
});