<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://www.codewars.com/api/v1/users/andres9888?access_key=DGGE24SAszoSyP5xwwfc",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Accept: */*",
    "Accept-Encoding: gzip, deflate",
    "Authorization: DGGE24SAszoSyP5xwwfc",
    "Cache-Control: no-cache",
    "Connection: keep-alive",
    "Cookie: __cfduid=df05e7ce8a65e7ace218bd40c031a84f71571147481",
    "Postman-Token: 567441a9-8911-459c-8e17-993cee4a99d8,69470673-7fac-41bd-83eb-1714ec8d82d4",
    "Referer: http://www.codewars.com/api/v1/users/andres9888?access_key=DGGE24SAszoSyP5xwwfc",
    "User-Agent: PostmanRuntime/7.18.0",
    "cache-control: no-cache"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
    $json = json_decode($response);
}
