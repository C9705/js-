import requests
import json
if __name__=='__main__':
    # POST请求：携带FormData
    url='https://fanyi.baidu.com/sug'
    # UA伪装
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}
    # 参数处理
    inkw=input('please input word:')
    Persondata={
        'kw':inkw
    }
    # 请求发送
    r=requests.post(url,headers=headers,data=Persondata)
    # 获取响应数据,r.hson--返回对象
    print(r.json())
    # 持续化存储(ensure_ascii=False---中文不能用ascii解码)
    fp=open(inkw+'.json','w',encoding='utf-8')
    json.dump(r.json(),fp=fp,ensure_ascii=False)
    print('success')
    fp.close()
    