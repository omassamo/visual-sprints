$(document).ready(function() {

	$( '#baseLink' ).focus(function(){
		console.log("FOCUS");
		$('#baseLink').tooltip('show');
	});

	//Passes values from inputs to vars

	$( '#key' ).click(function() {
	    var link = $( '#baseLink' ).val();
	    var key = $( '#apiKey' ).val();
	    var vel = $( '#Velocity' ).val();
	    console.log(link + key); 
	    $("#key").attr("disabled", true);

    // Fetch data from airtable 
	   	
	   	jQuery.ajax({
	       url: link, //https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201
	       type: "GET", 
	       data: {
	           "api_key": key, //keycGQqA0T3nBwQay
	       },
	   		  //  headers: {
	       //     "Cookie": "AWSALB=A1wexWjIQLVw5QWo5kKTUNY7yd1vt4E3VnGLvwidH+WcRfYPrA8qklJhNBMvV/TLq0JzPV24tjtH2na6QDlxxuDRIJL3j3vHjysDsGKvwV5TCMhYfvkjr1ugCDxw",
	       // }, 
	   	})
	   	.done(function(data, textStatus, jqXHR) {
	       console.log("HTTP Request Succeeded: " + jqXHR.status);
	       console.log(data);

	   		// jQuery each loop

	       	$.each( data.records, function(i, val){
	         console.log(data.records[i].fields.name);
	         console.log(data.records[i].id);
	         $("#records").append(
	           "<div class='story' style='width: " + (data.records[i].fields.points/vel)*100 + "%;'><div>" 
	           + data.records[i].fields.story + 
	           "</div><div>Points: " 
	           + data.records[i].fields.points + 
	           "</div><div>Description: " 
	           + data.records[i].fields.description +
	           "</div></div>"
	           );

	       	})

	   })
	   .fail(function(jqXHR, textStatus, errorThrown) {
	       console.log("HTTP Request Failed");
	       "ERROR"
	   })
	   .always(function() {
	       /* ... */
	   });
	});
});


// !!!!!!!!Get test cards immediately !!!!!!!!

// $(document).ready(function() {

// // Request (GET https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201)

// jQuery.ajax({
//     url: "https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201",
//     type: "GET",
//     data: {
//         "api_key": "keycGQqA0T3nBwQay",
//     },
//     headers: {
//         "Cookie": "AWSALB=RnDwuiauTbdEezuoNCHz0iZpiBkSxaLh/adOdKXUHXLYuHNjUXYKFLbfga3oQ384lWkr/v5XwLcGggPY9cVNv8BGcy9ZACI6ntKNrUss6kJv+aUpWREZXDBRYoek",
//     },
// })
// .done(function(data, textStatus, jqXHR) {
//     console.log("HTTP Request Succeeded: " + jqXHR.status);
//     console.log(data);

//     // jQuery each loop

// 	       	$.each( data.records, function(i, val){
// 	         console.log(data.records[i].fields.name);
// 	         console.log(data.records[i].id);
// 	         $("#records").append(
// 	           "<div class='story' style='width: " + data.records[i].fields.points + "%;'><div> Story: " 
// 	           + data.records[i].fields.story + 
// 	           "</div><div>Points: " 
// 	           + data.records[i].fields.points + 
// 	           "</div><div>Description: " 
// 	           + data.records[i].fields.description +
// 	           "</div></div>"
// 	           );

// 	       	})
// })
// .fail(function(jqXHR, textStatus, errorThrown) {
//     console.log("HTTP Request Failed");
// })
// .always(function() {
//     /* ... */
// });
// });





