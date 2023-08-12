/***********************************************

> 应用名称：墨鱼自用喜马拉雅会员解锁Demo脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-07-20
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 使用说明：这只是一个Demo，请下载脚本至本地Scripts文件夹下，填写会员Cookie，远程引用本重写，开启解析器使用
> 使用说明：会员Cookie如何获取，这得靠你自己了，会员解锁需要配合去广告重写，请不要分开使用
> 使用说明：墨鱼自用，故未对应用的个人界面用户名进行更改

[rewrite_local]

# > 去广告重写
^https?:\/\/.*\.xima.*\.com\/discovery-category\/customCategories url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/focus\/queryF url reject
^https?:\/\/.*\.xima.*\.com\/mobile-playpage\/view\/ url reject
^https?:\/\/.*\.xima.*\.com\/chaos-notice-web\/v1\/message\/preview\/list url reject
^https?:\/\/.*\.xima.*\.com\/social-web\/bottomTabs\/dynamicEntrance\/status url reject
^https?:\/\/.*\.xmcdn\.com\/\w{8}\/\w{4}-\w{16}\/.+gif$ url reject
^https?:\/\/.*\.xima.*\.com\/(dog-portal\/checkOld|(child-mobile\/child|aged-mobile\/aged)\/mode\/query) url reject
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/isShowUserGiftPendant url reject
^https?:\/\/.*\.xima.*\.com\/mobile-user\/unread url reject
^https?:\/\/.*\.xima.*\.com/mobile-user/minorProtection/pop url reject
^https?:\/\/.*\.xima.*\.com\/collector\/xl\/v\d url reject
^https?:\/\/.*\.xima.*\.com\/butler-portal\/versionCheck url reject
^https?:\/\/(adse\.wsa|adse|adbehavior|gslbtx|adbtse|xdcs-collector|gslbali|adxmlyse)\.xima.*\.com\/.* url reject
^https?:\/\/.*\.xima.*\.com\/mobile\/discovery\/v\d\/location url reject
^https?:\/\/.*\.xima.*\.com\/hotWord url reject
^https?:\/\/.*\.xima.*\.com\/guideWord url reject
^https?:\/\/.*\.xima.*\.com\/api\/v\d\/adRealTime url reject
^https?:\/\/.*\.xima.*\.com\/ting\/(loading|feed|home)? url reject
^https?:\/\/.*\.xima.*\.com\/focus-mobile\/focusPic url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js
^https?:\/\/.*\.xima.*\.com\/discovery-feed\/v\d\/mix url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js
^https?:\/\/.*\.xima.*\.com\/discovery-category\/v\d/category url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js
^https?:\/\/.*\.xima.*\.com\/mobile-user\/v\d\/homePage url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/ximalaya_json.js

# > 会员解锁重写
^https?:\/\/.*\.xima.*\.com\/(mobile-playpage/track/v3/baseInfo|mobile/v1/album/track|mobile/v1/album/detail|mobile-album/album/page|mobile/album/paid/info|mobile-playpage/playpage/tabs|product/detail/v1/basicInfo/dynamic) url script-request-header https://raw.githubusercontent.com/8457yin/quanxx/main/ximalaya.vip.demo.js

[mitm]

hostname = *.xima*.*, *.xmcdn.*

***********************************************/




var modifiedHeaders = $request.headers;
modifiedHeaders['Cookie'] = '343546546&1D50DFA0240C268B5DF9EC8D13820206876221127061AC7914ABD5ADE1DD9E6011151BA4EFB1148M04C15565BEC0ACE_'
$done({headers : modifiedHeaders});
