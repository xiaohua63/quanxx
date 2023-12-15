#!desc=小花雪球去广告自定义0425

[MITM]

hostname = %APPEND% *.xueqiu.com, xqimg.imedao.com, 101.201.62.20, 101.201.62.22



[URL Rewrite]
^https:\/\/api\.xueqiu\.com\/query\/v1\/symbol\/search\/status\.json url reject-dict

^https:\/\/api\.xueqiu\.com\/v4\/statuses\/public_timeline_by_category\.json url reject-dict