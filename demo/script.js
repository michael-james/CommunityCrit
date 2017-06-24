$.fn.replaceWithPush = function(a) {
    var $a = $(a);

    this.replaceWith($a);
    return $a;
};

$("button.replace-complete").click(function() {
	var panel = $(this).closest(".panel");
	var title = panel.find(".panel-title").text();
	var link = "<a>Edit</a>";
	var contents = '<div class="alert alert-success" role="alert"><strong>Well done!</strong> You successfully commented on ' + title + '. ' + link + '</div>';
	panel.replaceWith(contents);
});

$("button.replace-complete-fade").click(function() {
	var panel = $(this).closest(".panel");
	var title = panel.find(".panel-title").text();
	var link = "";
	var contents = '<div class="alert alert-success" role="alert"><strong>Well done!</strong> You successfully commented on ' + title + '. ' + link + '</div>';
	panel.replaceWithPush(contents).delay(1000).fadeOut();
});