#!name = 无线宝去广告
#!desc = 移除主页内广告。
#!author = 小花🅥[https://github.com/xiaohua63/quanxx/main/README.md]
#!tag = 去广告
#!icon = https://raw.githubusercontent.com/xiaohua63/quanxx/main/app_icon/wxb.PNG
#!date = 2024-11-20 16:50:06
#!category = 小花

[Rule]
# 拦截HTTPDNS


[Rewrite]
# 主页内广告
^https:\/\/router-app-api\.jdcloud\.com\/v1\/regions\/cn-north-1\/unifierQuery reject-dict
^https:\/\/router-app-api\.jdcloud\.com\/v1\/regions\/cn-north-1\/bannerHorseRaceLamp reject-dict
^https:\/\/router-app-api\.jdcloud\.com\/v1\/regions reject-dict

[mitm] 
hostname = %APPEND% router-app-api.jdcloud.com，router-app-api.jdcloud.com
