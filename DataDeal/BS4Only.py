# import bs4
# 解析器
import lxml
import requests
'''
1.实例化beautifulSoup对象，并将页面源码数据加载到对象中；
2.通过调用beautifulSoup对象中的相关属性，方法，进行标签定位和数据提取；
'''
# 实例化
from bs4 import BeautifulSoup

# 先爬取个网页，将网页数据本地化
url='https://www.jianshu.com/p/9254bdc467b2'
r=requests.get(url,headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'})
with open('Bs4.html','w',encoding='utf-8') as Bs:
    Bs.write(r.text)

