/**
 * 一汽奥迪自动签到脚本
 * 1. 打开一汽奥迪 App 后自动获取并保存 Cookie。
 * 2. 执行签到请求，并使用保存的 Cookie。
 */

// 获取请求头中的 Cookie 并保存到 Loon 的持久化存储中


[rewrite_local]
^https:\/\/api\.audi\.com\/v1\/xx\/signin url script-request-header https://raw.githubusercontent.com/xiaohua63/quanxx/main/aodi.js

[task_local]
cron "30 8 * * *" https://raw.githubusercontent.com/xiaohua63/quanxx/main/aodi.js, tag=一汽奥迪积分签到, img-url=https://raw.githubusercontent.com/Crazy-Z7/Task/main/Image/IMG_0905.jpeg, enabled=true


if ($request && $request.headers) {
    let cookie = $request.headers['Cookie'] || $request.headers['cookie'];
    if (cookie) {
        $persistentStore.write(cookie, "AudiAppCookie");
        console.log("Cookie 已保存: " + cookie);
    } else {
        console.log("未能获取 Cookie");
    }
    $done({});
}

// 签到请求逻辑
else if ($trigger == "manual" || $trigger == "cron") {
    let url = "https://nvs.im.tencent.cn/v5/rapidauth/initialize?sdkappid=1400711493&random=999999999";
    let headers = {
        'accept-encoding': 'gzip, deflate, br',
        'user-agent': 'MyAuDi/4.4.1 CFNetwork/1399 Darwin/22.1.0',
        'accept-language': 'zh-CN,zh-Hans;q=0.9',
        'accept': '*/*',
        'content-length': '166',
        'content-type': 'application/json',
        'cookie': $persistentStore.read("AudiAppCookie") // 从持久化存储中读取保存的 Cookie
    };

    let body = JSON.stringify({
        "appId": "1400711493",
        "systemType": 1,
        "timeStamp": "1723908049",
        "sign": "F5AC2C44A4BCF9470AF3FEF5483A474E",
        "expandparam": "com.fawvw.audisuper"
    });

    let params = {
        url: url,
        timeout: 5000,
        headers: headers,
        body: body,
    };

    $httpClient.post(params, function(errormsg, response, data) {
        if (errormsg) {
            console.log("请求失败: " + errormsg);
        } else {
            // 处理签到响应
            try {
                let result = JSON.parse(data);
                if (result.status === "0" && result.msg === "成功") {
                    console.log("签到成功: " + result.msg);
                } else {
                    console.log("签到失败: " + result.msg);
                }
            } catch (e) {
                console.log("解析响应数据时出错: " + e.message);
            }
        }
        $done();
    });
} else {
    $done();
}