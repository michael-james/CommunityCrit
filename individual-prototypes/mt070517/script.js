var commentID = 0;

$( document ).ready(function() {	

  	$("#shareBtns button").click( function() {
  		var shareType = $(this).val();
  		createShareForm(shareType);
  	});

  	$(".likeComment").click( function() {
  		var $thumbsup = $(this).children(".glyphicon-thumbs-up");
  		var $counter = $(this).children(".likeCount");
		var count = parseInt($counter.text());
  		var likeColor = "blue";

  		if ($thumbsup.hasClass("liked")) {
  			count -= 1;
  			$counter.text(count);
  			$thumbsup.removeClass("liked");
  		} else {
  			count += 1;
  			$counter.text(count);
  			$thumbsup.addClass("liked");
  		}
  		
  	});

  	$('#neighborhood').change(function(){
        var selectVal = $(this).val()
        var $otherInput = $('#neighOtherFG');
        if (selectVal == "(other)") {
        	$($otherInput).show();
        } else {
        	$($otherInput).hide();
        }
    });

    $("#consent").change(function() {
    	console.log(this.checked);
    	var $signUp = $('#signUp');
    	if (this.checked) {
    		$signUp.attr("disabled", false);
    	} else {
    		$signUp.attr("disabled", true);
    	}
	});

	$("#learnMoreBtn").click( function () {
		$(this).toggleClass("active");
	});

	// $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	// 	var iframeSel = 'iframe[src$="feedback.htm"]';
	// // 	// var body = $(iframeSel + ' body');
	// 	var $iframe = $('iframe[src$="feedback.htm"]');
	// 	console.log($iframe);
	// // 	// console.log(body.height);
	// // 	// console.log($iframe.height);
		
	// // 	$iframe.style.height = $iframe.contentWindow.document.body.offsetHeight + 'px';
	// //   // e.target // newly activated tab
	// //   // e.relatedTarget // previous active tab
	// });
});

// $('iframe').load(function() {
// 	console.log(this.contentWindow.document.body.offsetHeight + 'px');
//     this.style.height =
//     this.contentWindow.document.body.offsetHeight + 'px';
// });


      //     
      //       Timothy, 03/23/17
      //     </div> <!-- .panel-footer -->
      //   </div> <!-- .panel -->
      // </div> <!-- .col -->

function createShareForm(shareType) {
	var data;

	switch(shareType) {
    case "pro":
        data = ["I <strong>like</strong>...", ,"this element of the project",
        		"because", "of this reason."];
        break;
    case "con":
        data = ["I am <strong>concerned</strong> about...", , "this element of the project", 
        		"because", "of this reason.",
        		"One way to address this would be", "to follow this suggestion."];
        break;
    case "suggestion":
        data = ["I have a <strong>suggestion</strong>...", "What if", "the project included this."];
        break;
    case "question":
        data = ["I have a <strong>question</strong> about...", , "this element of the project", 
        		"I would like more information about", "this aspect of that element."];
        break;
    case "story":
        data = ["I have a <strong>story</strong> about...", , "this element of the project", 
        		"Once upon a time,", "this thing happened to me or someone I know."];
        break;
    case "reference":
        data = ["This makes me <strong>think of</strong>...", , "this thing I know or this link.", 
        		"We could learn", "this from that."];
        break;
    case "custom":
        data = ["I have something else to say.", , "What's on your mind? Please try to use one of the other options if possible."];
        break;
    default:
        data = [];
	}

	var title = data[0];
	var input1label = data[1];
	var input1placeholder = data[2];
	var input2label = data[3];
	var input2placeholder = data[4];
	var input3label = data[5];
	var input3placeholder = data[6];

	var html =	'<div class="col-sm-12" id="shareForm">' +
					'<div class="panel panel-primary">' +
						'<div class="panel-heading">' +
							'<div class="panel-title">' + title + '</div>' +
						'</div> <!-- .panel-heading -->' +
						'<div class="panel-body">' +
							'<form>' +
								'<div class="form-group">';

	if (input1label != undefined) {
		html += '<label for="input1">' + input1label +'</label>';
	}
									
	html += '<textarea class="form-control" id="input1" placeholder="' + input1placeholder +' "></textarea>' +
		'</div>';


	if (data.length > 3) {
		html += '<div class="form-group">' +
					'<label for="input2">' + input2label +'</label>' +
					'<textarea class="form-control" id="input2" placeholder="' + input2placeholder + '"></textarea>' +
				'</div>';
	}

	if (data.length == 6) {
		html +=	'<div class="form-group">' +
					'<label for="input3">' + input3label + '</label>' +
				'</div>';
	}
	
	if (data.length > 5) {
		html += '<div class="form-group">' +
					'<label for="input3">' + input3label + '</label>' +
					'<textarea class="form-control" id="input3" placeholder="' + input3placeholder + '"></textarea>' +
				'</div>';
	}
		
	html += 	'<input type="button" value="Submit" class="btn btn-default" onclick="convertToComment()">' +
			'</form>' +
		'</div> <!-- .panel-body --></div> <!-- .panel --></div> <!-- .col -->';

	$("#shareForm").remove();
	$("#shareFormWrapper").prepend(html);

	$("#shareForm button").click( function() {
  		var shareType = $(this).val();
  		convertToComment(shareType);
  	});
}

function convertToComment() {
	// var panel = $(e);
	// console.log(panel);

	var input1val = $("#shareForm #input1").val();
	var input2val = $("#shareForm #input2").val();
	var input3val = $("#shareForm #input3").val();

	commentID += 1;
	console.log(commentID);
	
	var html = 	'<div class="col-md-4" id="myComment' + commentID + '"><div class="panel panel-default">' + 
	        		'<div class="panel-body">' +
	        			'<p><span class="label label-danger">con</span> I am concerned about <strong>' + input1val +
	        			'</strong> because <strong>' + input2val +
	        				'</strong>.<br><span class="label label-default label-purple">suggestion</span> One way to address this would be <strong>' + input3val +
	        				'</strong>.</p>' +
	        		'</div> <!-- .panel-body -->' +
	        		'<div class="panel-footer">' +
	        			'Michael' + ', ' + '6/12/17' +
	        			'<button type="button" class="close" data-target="#myComment' + commentID + '"> <span class="glyphicon glyphicon-trash" data-state="off" aria-hidden="true"><span aria-hidden="true"></span><span class="sr-only">Close</span></button>' + 
	        		'</div> <!-- .panel-footer --></div> <!-- .panel --></div> <!-- .col -->';

	$("#shareForm").remove();
	$("#myComments").prepend(html);

	$('#myComment' + commentID + ' .close').click( function () {
		console.log("closing...");
		var target = $('#myComment' + commentID);
		
		if (confirm("Are you sure you want to delete your comment?")) {
		    $(target).remove();
		}
	});
};
