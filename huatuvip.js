/*
小花破解
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
