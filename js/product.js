jQuery(document).ready(function ($) {
	//quantity-btn
	$("#plus").click(function () {
		var qty = parseInt($("#Quantity").val());
		qty = qty + 1;
		$("#Quantity").val(qty);
		var price=parseFloat($("#price").text());
		var total=price*qty;
		$("#total").html(total+".00");
	});
	$("#minus").click(function () {
		var qty = parseInt($("#Quantity").val());
		qty = qty - 1;
		if(qty>=0)
		{
			$("#Quantity").val(qty);
			var price=parseFloat($("#price").text());
			var total=price*qty;
			$("#total").html(total+".00");
		}
			
	});
    $(".small-image img").click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var imgSrc=$(this).attr("src");
        $(".big-image img").attr("src", imgSrc);
        
    });
	//slider
	var jssor_1_options = {
		$AutoPlay: 1,
		$AutoPlaySteps: 5,
		$SlideDuration: 500,
		$SlideWidth: 200,
		$SlideSpacing: 3,
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,
			$Steps: 1
		},
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$
		}
	};

	var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

	/*#region responsive code begin*/

	var MAX_WIDTH = 980;

	function ScaleSlider() {
		var containerElement = jssor_1_slider.$Elmt.parentNode;
		var containerWidth = containerElement.clientWidth;

		if (containerWidth) {

			var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

			jssor_1_slider.$ScaleWidth(expectedWidth);
		}
		else {
			window.setTimeout(ScaleSlider, 30);
		}
	}

	ScaleSlider();

	$(window).bind("load", ScaleSlider);
	$(window).bind("resize", ScaleSlider);
	$(window).bind("orientationchange", ScaleSlider);
	/*#endregion responsive code end*/

	
});