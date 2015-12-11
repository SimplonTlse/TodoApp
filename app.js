"use strict";


function addNode(val){
	$('.todos').append(tostr(val));
}


function tostr(val){
	return '<li><input class="toggleDone" type="checkbox"><span class="thething">'+val+'</span><button>X</button></li>'
}


var poo = {
	showAll: function(){
		$(".todos li").show();
	},
	showActive: function(){
		$(".todos li").hide();
		$(".todos li:not(.done)").show();
	},
	showCompleted: function(){
		$(".todos li").hide();
		$(".todos li.done").show();	
	},
	removeCompleted: function(){
		$('.done').remove();
	},
	countThatShit: function(){
		var count = $(".todos li:not(.done)").length;
		$('[pasteThatShitHere]').html(count);
	}
};



(function(){
	poo.countThatShit();

	//ajout des todos
	$('form').on('submit', function(event){
		event.preventDefault();
		addNode($("#addingstuff").val());
		$("#addingstuff").val('');
		poo.countThatShit();

	});

	//changement d'etat (classe done)
	$('.todos').on('change', '.toggleDone', function(){
		$(this).parent().toggleClass('done');
		poo.countThatShit();
	});

	//hide useless stuff
	$('.menu a').on('click', function(e){
		e.preventDefault();
		var attr = $(this).attr('act');
		poo[attr]();
		
	});

	$('.todos').on('click', 'button', function(e){
		$(this).parent().remove();
	})


})();


