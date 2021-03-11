import requests
import json
if __name__=='__main__':

    url='http://scxk.nmpa.gov.cn:81/xk/itownet/portalAction.do?method=getXkzsList'
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'}
    data={
        'on': 'true',
        'page': 1,
        'pageSize': 15,
        'productName':'' ,
        'conditionType': 1,
        'applyname': '',
        'applysn': '',
    }
    r=requests.post(url,headers=headers,data=data)
    print(r.status_code)
    # 具体信息
    # url2='http://scxk.nmpa.gov.cn:81/xk/itownet/portal/dzpz.jsp?id='
    # url3='http://scxk.nmpa.gov.cn:81/xk/itownet/portalAction.do?method=getXkzsById'
    id_list=[]#存储id
    for i in r.json()['list']:
        id_list.append(i['ID'])
    # 查找详细信息
    url3='http://scxk.nmpa.gov.cn:81/xk/itownet/portalAction.do?method=getXkzsById'
    for id in id_list:
        data2={
            'id': id
        }
        newR=requests.post(url3,headers=headers,data=data2)
        fp=open('data.json','a',encoding='utf-8')
        json.dump(newR.json(),fp,ensure_ascii=False)
    print('Over')

