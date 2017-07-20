
$(function(){
	
	$(".money_two>.btn,i").click(function(){
		$(".money_ul").show();
		$(".money_ul").slideDown();
	})
	
	$(".money_ul").hover(function(){
		$(".money_ul").show();
	},function(){
		$(".money_ul").slideUp();
	})
	
	
	$(".money_ul>li").click(function(){
		$("#txt").val($(this).html());
		$(".money_ul").css({"display":"none"});
	})
	
	
	$(".time_two>.btn").click(function(){
		$(".time_ul").show();
		$(".time_ul").slideDown();
	})
	
	$(".time_ul").hover(function(){
		$(".time_ul").show();
	},function(){
		$(".time_ul").slideUp();
	})
	
	$(".time_ul>li").click(function(){
		$("#text").val($(this).html());
		$(".time_ul").css({"display":"none"});
	})
	
})
	






//	$(".money_ul>li").click(function(){
//		$(this).index()
//		$("#txt").val($(this).html());
//		$(".money_ul").hide();
//	})
	
