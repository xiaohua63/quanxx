/*
小花破解

[rewrite_local]
^https:\/\/ns\.huatu\.com\/u\/v3\/member\/user url script-response-body https://raw.githubusercontent.com/8457yin/quanxx/main/huatuvip.js
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/info';

if (url.indexOf(vip) != -1) {
    obj.data.giveMember= true;
 
    body = JSON.stringify(obj);
}
$done({body});
