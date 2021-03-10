import requests
import json
if __name__=='__main__':
    url='https://movie.douban.com/j/search_subjects?'
    param={
        'type': 'movie',
        'tag': '热门',
        'sort': 'recommend',
        'page_limit': '200',
        'page_start': '0'
    }
    # UA伪装
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}
    # 请求发送
    r=requests.get(url,headers=headers,params=param)
    list_data=r.json()
    fp=open('list_data.json','w',encoding='utf-8')
    json.dump(list_data,fp,ensure_ascii=False)
    print('Over')

    