$(document).ready(function() {

	// Tooltip for link

	$( '#baseLink' ).focus(function(){
		console.log("FOCUS");
		$('#baseLink').tooltip('show');
	});

	//Passes values from inputs to vars

	$( '#key' ).click(function() {
	   var link = $( '#baseLink' ).val();
	   var key = $( '#apiKey' ).val();
	   var vel = $( '#Velocity' ).val();
	   console.log(link + key + vel); 
	   $("#key").attr("disabled", true);

	// hide onboarding
	   $("#onb").hide(400);

   // Fetch data from airtable 
	   	
	jQuery.ajax({
   	url: link, 
   	type: "GET", 
   	data: {
      	"api_key": key, 
    	},

	})

	.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status); 

	// Append content for each card and set width based on story points

 	$.each( data.records, function(i, val){
  	console.log(data.records[i].fields.name);
  	console.log(data.records[i].id);
  	$("#records").append(
     	"<div class='story' style='width: " + (data.records[i].fields.points/vel)*100 + "%;'><div>" + data.records[i].fields.story + "</div><div>Points: " + data.records[i].fields.points
     	);

 		});

	})
	   .fail(function(jqXHR, textStatus, errorThrown) {
	       console.log("HTTP Request Failed");
	   })
	   .always(function() {
	       /* ... */
	   });
	});
});