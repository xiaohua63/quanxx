# 华图
[mitm] 

hostname=ns.huatu.com,ocfapi.huatu.com


[rewrite_local]
# 开屏广告
^https:\/\/ns\.huatu\.com\/u\/v5\/users\/bc\/launch\?category=200100064 url reject-dict
# 我的主页广告
^https:\/\/ns\.huatu\.com\/u\/v5\/users\/bc\/myOperation\?category=200100064 url reject-dict
# 主页中间小条广告
^https:\/\/ns\.huatu\.com\/u\/v6\/users\/bc\/homeOperation\?cv=7\.3\.390&category=200100064 url reject-dict
# 主页最上边大图广告
^https:\/\/ns\.huatu\.com\/u\/v5\/users\/bc\/list\?category=200100064&fur=0 url reject-dict
#主页模考大赛图片
^https:\/\/ns\.huatu\.com\/u\/v6\/users\/bc\/homeOperation url reject-dict
#主页视频弹窗
^https:\/\/ocfapi\.huatu\.com\/api\/user\/get_online_app_red_dot url reject-dict