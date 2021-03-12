# 爬取qq音乐榜单
import requests
import json

if __name__=='__main__':
    pass
    url='https://u.y.qq.com/cgi-bin/musics.fcg?-=getUCGI9724502819003307&g_tk=5381&sign=zzalv14k0prmnk52fed248c076dfc1e19f1fa8a146aaea&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22detail%22%3A%7B%22module%22%3A%22musicToplist.ToplistInfoServer%22%2C%22method%22%3A%22GetDetail%22%2C%22param%22%3A%7B%22topId%22%3A27%2C%22offset%22%3A0%2C%22num%22%3A20%2C%22period%22%3A%222021-03-11%22%7D%7D%2C%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%7D'
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}
    r=requests.get(url,headers=headers)
    song=r.json()['detail']['data']['data']['song']
    # print(r.json()['detail']['data']['data']['song'])
    
    fp=open('QQ.json','w',encoding='utf-8')
    json.dump(song,fp=fp,ensure_ascii=False)