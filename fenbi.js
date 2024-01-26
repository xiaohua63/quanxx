# 粉笔
[mitm] 

hostname=ke.fenbi.com, tiku.fenbi.com, market-api.fenbi.com, keapi.fenbi.com


[rewrite_local]
# 粉笔微信咨询
^https:\/\/market-api\.fenbi\.com\/iphone\/v1\/assistant\/my url reject-dict
# 粉笔会员中心
^https:\/\/ke\.fenbi\.com\/iphone\/v3\/user_member\/entry url reject-dict
# 粉笔左下角广告
^https:\/\/keapi\.fenbi\.com\/app\/iphone\/szyf\/small_banner url reject-dict
# 粉笔最上边大图片，注释掉了，使用会导致不美观
#^https:\/\/tiku\.fenbi\.com\/iphone\/szyf\/banners\/v2 url reject-dict
# 粉笔左下角pdf
^https:\/\/market-api\.fenbi\.com\/iphone\/v1\/assistant\/entrance\/show url reject-dict
# 打开提示直播进行中
^https:\/\/ke\.fenbi\.com\/iphone\/v3\/remind\/instant url reject-dict