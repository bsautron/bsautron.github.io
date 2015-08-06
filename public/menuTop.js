var flag = false;
$(document).scroll(function () {
	if (!flag && $(document).scrollTop() >= $(window).height() * 0.70) {
		flag = true;
		$('#menu').animate({
			backgroundColor: "white"
			}, 200
		);
		$('#menu').find("span").animate({
			color: "rgba(0,0,0,0.8)"
			}, 0
		);

		$('#menu').find("li").animate({
			color: "rgba(0,0,0,0.8)"
			}, 0
		);
		$('#menu').css("box-shadow", "0 1px 4px");
		$('#menu').find("li").unbind('mouseenter mouseleave')
		$('#menu').find("li").hover(
			function () {
				$(this).animate({
					backgroundColor: "rgba(0,0,0,0.8)",
					color: "rgba(255,255,255,0.9)"
					}, 100
				);
			},
			function () {
				$(this).animate({
					backgroundColor: "white",
					color: "rgba(0,0,0,0.8)"
					}, 100
				);
			}

		);
	}
	else if (flag && $(document).scrollTop() < $(window).height() * 0.70) {
		flag = false;
		$('#menu').animate({
			backgroundColor: "transparent"
			}, 200
		);
		$('#menu').find("span").animate({
			color: "rgba(255,255,255,0.3)"
			}, 0
		);

		$('#menu').find("li").animate({
			color: "rgba(255,255,255,0.9)",
			backgroundColor: "transparent"
			}, 0
		);
		$('#menu').css("box-shadow", "0 0 0");
		$('#menu').css("border-bottom", "1px solid rgba(255, 255, 255, 0.1)");
		$('#menu').find("li").unbind('mouseenter mouseleave')
		$('#menu').find("li").hover(
			function () {
				$(this).animate({
					backgroundColor: "rgba(255,255,255,0.1)",
					color: "rgba(255,255,255,0.9)"
					}, 100
				);
			},
			function () {
				$(this).animate({
					backgroundColor: "transparent",
					color: "rgba(255,255,255,0.9)"
					}, 100
				);
			}

		);
	}
});