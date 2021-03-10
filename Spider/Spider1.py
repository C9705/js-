import requests
'''
1.通用爬虫：搜索引擎的抓取系统，互联网中一整张页面数据；
2.聚焦爬虫：建立在通用爬虫之上，聚焦在页面中特定的内容；
3.增量爬虫：检测网站数据更新的情况，只会爬取网站中最新的数据；
'''
'''
反爬机制：门户网站指定策略或技术，防止网站数据的爬取；
反反爬策略：通过制订策略和技术，破解网站的反爬机制，获取数据；
robots.txt协议：君子协议，网站规定哪些数据可以爬取；
'''
'''
http:
    请求头信息：
        请求载体(User-Agent)：请求载体的身份标识
        Connection:请求后是断开还是连接(Close/keep-alive)
    响应头信息：    
        Content-Typ：服务器响应回客户端的数据类型
https:(安全的http协议，涉及数据加密)
    数据加密方式：
        1.对称秘钥加密：
        2.非对称秘钥加密：
        3.证书秘钥加密(https的方式)：
'''
'''
requests：作用----模拟浏览器发请求
'''
# 指定URL，发起请求,r为返回的响应对象
# r=requests.get('https://www.sogou.com/')
r=requests.get('https://www.baidu.com/s?wd=python',headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'})
# 返回响应数据
responseText=r.text

# 持久化存储
with open('./Spider/sogou.html','a',encoding='utf-8') as o:
    o.write(responseText)
 