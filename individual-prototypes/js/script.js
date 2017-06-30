$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 


    // feedback types

    var fbBtnDefault = "btn-default";
    var fbBtnActive = "btn-primary";

    $(".add-fb").click(function() {
		var name = $(this).text();
		var collapseDiv = $(this).attr("data-target");
		console.log(collapseDiv);
		var currentlyIn = $(collapseDiv).hasClass("in");

		var length = $(this).parent().next().children().val().length;
		console.log(length);
	    // if ( value.length > 0 && value != "Default text" ) ...

	    $(this).removeClass(fbBtnDefault).addClass(fbBtnActive);

		if(currentlyIn) {
			if (length > 0) {
				var collapseID = $(this).parent().next().attr("id");
				console.log(collapseID);
				$(this).parent().append('<span class="fb-remove">You have text in this field. <a class="a-reopen" data-toggle="collapse" data-target="#' + collapseID + '">View</a> / <a class="a-delete">Discard</a></span>');
				$(".a-delete").click(function(e) {
				    e.preventDefault();
				    console.log("clicked!");

				    $(this).parent().siblings("button").removeClass(fbBtnActive).addClass(fbBtnDefault);

				    $(this).parent().parent().next().children().val('');
				    $(this).parent().remove();
				});
				$(".a-reopen").click(function(e) {
				    $(this).parent().remove();
				});
			} else {
				$(this).removeClass(fbBtnActive).addClass(fbBtnDefault);
			}
		} else {
			$(this).parent().find(".fb-remove").remove();
		}
	});

	// $("#test").click(function(e) {
	// 	e.preventDefault();
	// 	console.log("hi");
	//    // var test = $(this).parent().parent();//.next().children();//.val('');
	//    // console.log(test);
	// });
});

// $(".add-fb").click(function() {
// 	console.log("hi!");
// 	var name = $(this).text();
// 	$("#fb-written").append('<div class="form-group"><label for="name">' + name + '</label><textarea class="form-control" rows="3" id="' + name + '"></textarea></div>');
// 	// var panel = $(this).closest(".panel");
// 	// var title = panel.find(".panel-title").text();
// 	// var link = "";
// 	// var contents = '<div class="alert alert-success" role="alert"><strong>Well done!</strong> You successfully commented on ' + title + '. ' + link + '</div>';
// 	// panel.replaceWithPush(contents).delay(1000).fadeOut();
// });