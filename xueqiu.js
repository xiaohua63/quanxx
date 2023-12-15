#!desc=小花雪球去广告自定义12.15

[MITM]

hostname = %APPEND% *.xueqiu.com, *.imedao.com, 101.201.62.20, 101.201.62.22,danjuanfunds.com



[URL Rewrite]
^https:\/\/api\.xueqiu\.com\/query\/v1\/symbol\/search\/status\.json\？ url reject-dict

^https:\/\/api\.xueqiu\.com\/v4\/statuses\/public_timeline_by_category\.json\？ url reject-dict

^https?:\/\/xqimg\.imedao\.com\/[a-z0-9]{24}\.jpg$ - reject-200

^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json\? url reject-dict

^https:\/\/fund\.xueqiu\.com\/fundx\/base\/fund\/achievement\/analysis url reject-dict

^https:\/\/xueqiu\.com\/f\/new\/activity\/fundH5\/subject1-mogen-guanggao url reject-dict

^https:\/\/danjuanfunds\.com\/n\/activity\/fund-sku\/yy_gqzt url reject-dict

^https:\/\/assets\.imedao\.com\/broker\/static\/js\/open url reject-dict

^https:\/\/open\.xueqiu\.com\/mpaas\/config\/content url reject-dict
# 别人的，我没抓到
# 雪球热门推荐
^https:\/\/api\.xueqiu\.com\/statuses\/livenews\/mark\/list\.json\? url reject
^https:\/\/api\.xueqiu\.com\/snowflake-theme\/query\/v1\/hot_event\/rich_tag_new\.json\? url reject
# 雪球广告
^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json\? url reject
^https:\/\/api\.xueqiu\.com\/analysis\/build_union\/dialog\/show\.json\? url reject
^https:\/\/api\.xueqiu\.com\/snowpard\/launch_strategy\/query\.json\? url reject
^https:\/\/fund\.xueqiu\.com\/fundx url reject
^https:\/\/api\.xueqiu\.com\/ucprofile\/api\/user\/batch_get_profile_image\.json url reject
^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json url reject
^https:\/\/open\.xueqiu\.com\/mpaas\/rn\/releases\/v2\/match_bundles url reject
^https:\/\/api.xueqiu.com\/ucprofile\/api\/user\/batchGetUserBasicInfo.json url reject-dict