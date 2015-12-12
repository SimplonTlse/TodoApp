"use strict"; /* on précise à l'interpréteur js du navigateur 
que nous ne voulons pas qu'il soit laxiste que le renvois d'erreurs */

// Don't repeat yourself
function addNode(val){
	$('.todos').append(toStr(val));
}


function toStr(val){
	return '<li><input class="toggleDone" type="checkbox"><span class="thething">'+val+'</span><button>X</button></li>'
}

//un objet ou dictionnaire
var poo = {
	//une méthode (fonction dans un objet)
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
		/* on séléctionne tous les éléments portant la classe todo
		sauf ceux qui ont en plus la classe done et on les comptes grâce à 
		la propriété length qui renvoir le nombre d'éléments présents
		dans un tableau ou le nombre de caractères dans une chaîne de caractères */
		var count = $(".todos li:not(.done)").length;
		// on modifie la le contenu de l'élément portant l'attribut pasteThatShitHere
		$('[pasteThatShitHere]').html(count);
	}
};


/* 
	on mets notre code dans une fonction auto-executante (IEEF)
	pour isoler notre scope
*/
(function(){
	//on compte le nombre d'éléments au départs et à chaque fois que nécessaire
	poo.countThatShit();

	//ajout des todos
	$('form').on('submit', function(event){
		event.preventDefault();
		addNode($("#addingstuff").val());
		$("#addingstuff").val('');
		poo.countThatShit();
	});

	/* changement d'etat (classe done)
		délégation d'un événement 
	//*/
	$('.todos').on('change', '.toggleDone', function(){
		/* le mot clé this sert à séléctionner l'élément courant
		pour tout savoir du comportement parfois étrange de ce mot-clé
		en javascript, Eloquent Javascript est votre plus précieux allié. */
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

})(); // on exécute immédiatemment notre fonction


