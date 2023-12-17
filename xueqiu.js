#!desc=小花雪球去广告自定义12.15

[MITM]

hostname = %APPEND% api.xueqiu.com, xqimg.imedao.com, 101.201.62.20, 101.201.62.22, open.xueqiu.com ,101.201.175.228



[URL Rewrite]
# 开屏
^https:\/\/api\.xueqiu\.com\/brand\/search\/v1\.json\? url reject
^https:\/\/101\.201\.175\.228\/snowpard\/launch_strategy\/query\.json url reject
# 热门推荐
^https:\/\/api\.xueqiu\.com\/statuses\/livenews\/mark\/list\.json\? url reject
^https:\/\/api\.xueqiu\.com\/snowflake-theme\/query\/v1\/hot_event\/rich_tag_new\.json\? url reject

# 广告
^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json\? url reject
^https:\/\/api\.xueqiu\.com\/analysis\/build_union\/dialog\/show\.json\? url reject
^https:\/\/api\.xueqiu\.com\/snowpard\/launch_strategy\/query\.json\? url reject
^https:\/\/fund\.xueqiu\.com\/fundx url reject
^https:\/\/api\.xueqiu\.com\/ucprofile\/api\/user\/batch_get_profile_image\.json url reject
^https:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json url reject
^https:\/\/open\.xueqiu\.com\/mpaas\/rn\/releases\/v2\/match_bundles url reject
^https:\/\/api.xueqiu.com\/ucprofile\/api\/user\/batchGetUserBasicInfo.json url reject-dict

^https?:\/\/xqimg\.imedao\.com\/[a-z0-9]{24}\.jpg$ - reject-200
^https?:\/\/api\.xueqiu\.com\/statuses\/livenews\/mark\/list\.json\? - reject-dict
^https?:\/\/api\.xueqiu\.com\/snowflake-theme\/query\/v1\/hot_event\/rich_tag_new\.json\? - reject-dict
^https?:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json\? - reject-dict
^https?:\/\/api\.xueqiu\.com\/analysis\/build_union\/dialog\/show\.json\? - reject-dict
^https?:\/\/api\.xueqiu\.com\/snowpard\/launch_strategy\/query\.json\? - reject-dict
^https?:\/\/fund\.xueqiu\.com\/fundx - reject-dict
^https?:\/\/api\.xueqiu\.com\/ucprofile\/api\/user\/batch_get_profile_image\.json - reject-dict
^https?:\/\/api\.xueqiu\.com\/recommend-proxy\/card\/zj_card\.json - reject-dict
^https?:\/\/open\.xueqiu\.com\/mpaas\/rn\/releases\/v2\/match_bundles - reject-dict
^https?:\/\/api\.xueqiu\.com\/ucprofile\/api\/user\/batchGetUserBasicInfo.json - reject-dict
^https?:\/\/api\.xueqiu\.com\/lightsnow\/launch\/plan\/bee\/query.json - reject-dict
^https?:\/\/api\.xueqiu\.com\/ucprofile\/api\/user\/batch_get_profile_image\.json - reject-dict
