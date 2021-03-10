import requests
if __name__=='__main__':
    url='https://www.sogou.com/web?'
    # 设置搜索参数，
    kw=input('enter a word:')
    param={
        'query':kw
    }
    #User-Agent:UA检测---UA伪装 
    r=requests.get(url,
    headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36'},
    params=param)
    
    # 存储
    with open(kw+'.html','w',encoding='utf-8') as w:
        w.write(r.text)
        print('Success！！')