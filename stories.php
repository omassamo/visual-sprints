<?php

// Get cURL resource
$ch = curl_init();

// Set url
curl_setopt($ch, CURLOPT_URL, 'https://api.airtable.com/v0/appjKgplDb7dwCcjw/Table%201?api_key=keycGQqA0T3nBwQay');

// Set method
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

// Set options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Set headers
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Cookie: AWSALB=A1wexWjIQLVw5QWo5kKTUNY7yd1vt4E3VnGLvwidH+WcRfYPrA8qklJhNBMvV/TLq0JzPV24tjtH2na6QDlxxuDRIJL3j3vHjysDsGKvwV5TCMhYfvkjr1ugCDxw",
 ]
);


// Send the request & save response to $resp
$resp = curl_exec($ch);

if(!$resp) {
  die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
} else {
  echo "Response HTTP Status Code : " . curl_getinfo($ch, CURLINFO_HTTP_CODE);
  echo "\nResponse HTTP Body : " . $resp;
}

// Close request to clear up some resources
curl_close($ch);


