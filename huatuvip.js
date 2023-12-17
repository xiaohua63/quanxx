/*
小花破解
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/cms/Appapi/username/username';

if (url.indexOf(vip) != -1) {
    obj.point= 999999;
 
    body = JSON.stringify(obj);
}
$done({body});
