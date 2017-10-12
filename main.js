$(document).ready(function() {
// Request (GET https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201)

jQuery.ajax({
    url: "https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201",
    type: "GET",
    data: {
        "api_key": "keycGQqA0T3nBwQay",
    },
    headers: {
        "Cookie": "AWSALB=A1wexWjIQLVw5QWo5kKTUNY7yd1vt4E3VnGLvwidH+WcRfYPrA8qklJhNBMvV/TLq0JzPV24tjtH2na6QDlxxuDRIJL3j3vHjysDsGKvwV5TCMhYfvkjr1ugCDxw",
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);

// jQuery each loop

    $.each( data.records, function(i, val){
      console.log(data.records[i].fields.name);
      console.log(data.records[i].id);
      $("#records").append(
        "<div class='story' style='width: " + data.records[i].fields.points + "%;'><div> Story: " 
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
})
.always(function() {
    /* ... */
});
});

