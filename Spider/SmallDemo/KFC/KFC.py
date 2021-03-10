import requests
import json
if __name__=='__main__' :
    url='http://www.kfc.com.cn/kfccda/ashx/GetStoreList.ashx?op=keyword'
    # UA伪装
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}
    param2={
        'cname': '',
        'pid':'',
        'keyword': '大连',
        'pageIndex': '1',
        'pageSize': '10'
    }
    r=requests.post(url,headers=headers,data=param2)
    
    print(r.status_code)
    daa=json.dumps(r.json())
    fp=open('kfc.json','w',encoding='utf-8')
    json.dump(r.json(),fp=fp,ensure_ascii=False)
    print('success')