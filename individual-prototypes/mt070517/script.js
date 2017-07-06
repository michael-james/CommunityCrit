$( document ).ready(function() {
  $("#shareBtns button").click( function() {
  	var shareType = $(this).val();
  	createShareForm(shareType);
  });
});

function createShareForm(shareType) {
	var data;

	switch(shareType) {
    case "pro":
        data = ["I <strong>like</strong>...", shareType + "1", , "this element of the project",
        		shareType + "2", "because", "of this reason."];
        break;
    case "con":
        data = ["I am <strong>concerned</strong> about...", shareType + "1", , "this element of the project", 
        		shareType + "2", "because", "of this reason.",
        		shareType + "3", "One way to address this would be", "to follow this suggestion."];
        break;
    case "suggestion":
        data = ["I have a <strong>suggestion</strong>...", shareType + "1", "What if", "the project included this."];
        break;
    case "question":
        data = ["I have a <strong>question</strong> about...", shareType + "1", , "this element of the project", 
        		shareType + "2", "I would like more information about", "this aspect of that element."];
        break;
    case "story":
        data = ["I have a <strong>story</strong> about...", shareType + "1", , "this element of the project", 
        		shareType + "2", "Once upon a time,", "this thing happened to me or someone I know."];
        break;
    case "reference":
        data = ["This makes me <strong>think of</strong>...", shareType + "1", , "this thing I know or this link.", 
        		shareType + "2", "We could learn", "this from that."];
        break;
    default:
        data = [];
	}

	console.log(data.length);

	var title = data[0];
	var input1id = data[1];
	var input1label = data[2];
	var input1placeholder = data[3];
	var input2id = data[4]; 
	var input2label = data[5];
	var input2placeholder = data[6];
	var input3id = data[7];
	var input3label = data[8];
	var input3placeholder = data[9];

	var html =	'<div class="col-sm-6 col-md-4">' +
					'<div class="panel panel-primary">' +
						'<div class="panel-heading">' +
							'<div class="panel-title">' + title + '</div>' +
						'</div> <!-- .panel-heading -->' +
						'<div class="panel-body">' +
							'<form>' +
								'<div class="form-group">';

	if (input1label != undefined) {
		html += '<label for="' + input1id + '">' + input1label +'</label>';
	}
									
	html += '<textarea class="form-control" id="' + input1id + '" placeholder="' + input1placeholder +' "></textarea>' +
		'</div>';


	if (data.length > 4) {
		console.log("second input added");
		html += '<div class="form-group">' +
					'<label for="' + input2id + '">' + input2label +'</label>' +
					'<textarea class="form-control" id="' + input2id + '" placeholder="' + input2placeholder + '"></textarea>' +
				'</div>';
	}

	if (data.length == 8) {
		console.log("third label added");
		html +=	'<div class="form-group">' +
					'<label for="' + input3id + '">' + input3label + '</label>' +
				'</div>';
	}
	
	if (data.length > 7) {
		console.log("third input added");
		html += '<div class="form-group">' +
					'<label for="' + input3id + '">' + input3label + '</label>' +
					'<textarea class="form-control" id="' + input3id + '" placeholder="' + input3placeholder + '"></textarea>' +
				'</div>';
	}
		
	html += 	'<input type="submit" value="Submit" class="btn btn-default">' +
			'</form>' +
		'</div> <!-- .panel-body --></div> <!-- .panel --></div> <!-- .col-sm-6 col-md-4 -->';

	$("#shareForms").append(html);
}