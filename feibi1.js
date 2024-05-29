/*
小花破解

[rewrite_local]
^https:\/\/tiku\.fenbi\.com\/ipad\/szyf\/banners\/v2 url script-response-body feibi.snippet
hostname = tiku.fenbi.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/ipad/szyf/banners/v2';

if (url.indexOf(vip) != -1) {
    obj.datas= [
      {
        "id" : 13394,
        "createdTime" : 1715851437908,
        "url" : "/web/coursedetail/sydw/651758?fb_source=651758",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18f994725b972ec.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1717430380000,
        "courseSetId" : 1090,
        "ordinal" : 2147483647,
        "startTime" : 1716184800000,
        "content" : "【618超“惠”学】事业单位及各类考试福利直播间"
      },
      {
        "id" : 13543,
        "createdTime" : 1716868481532,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18fbd4ffe2d494d.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1719763199000,
        "courseSetId" : 1090,
        "ordinal" : 2147483646,
        "startTime" : 1716868099000,
        "content" : "河南分校-事业单位-定金优惠"
      },
      {
        "id" : 13537,
        "createdTime" : 1716867737123,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18fbd46cd47e76e.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1719720008000,
        "courseSetId" : 1090,
        "ordinal" : 2147483646,
        "startTime" : 1716867488000,
        "content" : "河南分校-事业单位-面试抢先学"
      },
      {
        "id" : 13495,
        "createdTime" : 1716526064827,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18fa8e41a94eb33.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1732982399000,
        "courseSetId" : 1090,
        "ordinal" : 2147483646,
        "startTime" : 1716525590000,
        "content" : "河南分校-国省考-狂刷嗨学督练营"
      },
      {
        "id" : 12984,
        "createdTime" : 1713074461027,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://cdn.dou845.top/uploads/2024/05/12/202405121715500840.png",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1719723287000,
        "courseSetId" : 1090,
        "ordinal" : 2147483646,
        "startTime" : 1713074087000,
        "content" : "河南分校-三支一扶-定金"
      },
      {
        "id" : 13500,
        "createdTime" : 1716537267008,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://cdn.dou845.top/uploads/2024/05/12/202405121715500840.png",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1717214400000,
        "courseSetId" : 1090,
        "ordinal" : 2147483645,
        "startTime" : 1716537028000,
        "content" : "河南分校-三支一扶-公基笔试特训营3期"
      },
      {
        "id" : 13444,
        "createdTime" : 1716185588246,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18f94a02b832904.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1718035199000,
        "courseSetId" : 1090,
        "ordinal" : 2147483645,
        "startTime" : 1716185356000,
        "content" : "河南分校-三支一扶-公告解读"
      },
      {
        "id" : 13433,
        "createdTime" : 1716171135194,
        "url" : "https://sim.ynncc1.top",
        "imageUrl" : "https://fb.fbstatic.cn/api/ape-images/18f93c26721eb07.jpg?width=2160&height=396",
        "type" : 0,
        "urlTarget" : 0,
        "redirectType" : "NATIVE",
        "endTime" : 1735610953000,
        "courseSetId" : 1090,
        "ordinal" : 2147483645,
        "startTime" : 1716170953000,
        "content" : "河南分校-国考-申论笔杆子"
      }
    ]
  };
 
    body = JSON.stringify(obj);
}
$done({body});
