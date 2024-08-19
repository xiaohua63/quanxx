#!name = 一汽奥迪去除开屏广告
#!desc = 移除开屏广告。
#!author = 小花🅥[https://github.com/xiaohua63/quanxx/main/README.md]
#!tag = 去广告
#!icon = https://raw.githubusercontent.com/xiaohua63/quanxx/main/app_icon/audi.png
#!date = 2024-08-19 16:50:06

[Rule]
# 拦截HTTPDNS


[Rewrite]
# 开屏广告
^https:\/\/audi2c\.faw-vw\.com\/capi\/v1\/loading_page\/get reject-dict

[Mitm]
hostname = audi2c.faw-vw.com