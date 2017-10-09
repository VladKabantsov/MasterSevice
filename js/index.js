var blipDim = '400px';

$('.blip-link').click(function(event){
  event.preventDefault();
  $('.blip-click', this).width(blipDim).height(blipDim);
  $('.link-content', this).addClass('clicked');
});

$('.blip-link').mouseleave(function(){
  if($('.link-content', this).hasClass('clicked')) {
    $('.blip-click', this).width(0).height(0);
    $('.link-content', this).removeClass('clicked');
  }
});

$(document).ready(function(){
	$("#yakor").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(){
	$("#navigation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});