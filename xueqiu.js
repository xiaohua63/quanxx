#!desc=小花雪球去广告自定义12.15

[MITM]

hostname = %APPEND% *.xueqiu.com, *.imedao.com, 101.201.62.20, 101.201.62.22,danjuanfunds.com



[URL Rewrite]
^https:\/\/api\.xueqiu\.com\/query\/v1\/symbol\/search\/status\.json url reject-dict

^https:\/\/api\.xueqiu\.com\/v4\/statuses\/public_timeline_by_category\.json url reject-dict

^https?:\/\/xqimg\.imedao\.com\/[a-z0-9]{24}\.jpg$ - reject-200

^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json url reject-dict

^https:\/\/fund\.xueqiu\.com\/fundx\/base\/fund\/achievement\/analysis url reject-dict

^https:\/\/xueqiu\.com\/f\/new\/activity\/fundH5\/subject1-mogen-guanggao url reject-dict

^https:\/\/danjuanfunds\.com\/n\/activity\/fund-sku\/yy_gqzt url reject-dict

^https:\/\/assets\.imedao\.com\/broker\/static\/js\/open url reject-dict

^https:\/\/open\.xueqiu\.com\/mpaas\/config\/content url reject-dict

