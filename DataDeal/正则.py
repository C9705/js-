import requests
import re
import os
print(os.getcwd())
if __name__=='__main__':
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36'
    }
    url='https://www.quanjing.com/'
    # content返回二进制形式的图片数据 
    img_data=requests.get(url,headers=headers).text
    ex1='<div class="box active">.*?</div>'
    ex='<img src="(.*?)" alt.*?>'
    # .findall匹配，re.S--单行匹配
    # print(img_data)
    # img_list=re.findall(ex,img_data,re.S) 
    i=re.findall(ex1,img_data,re.S)
    i1=re.findall(ex,str(i),re.S)
    # print(i)
    # with open('1.html','w',encoding='utf-8') as fp:
    #     fp.write(str(i1))
    # with open('2.html','w',encoding='utf-8') as fp:
    #     fp.write(img_data)
    # 图片开始存储
    w=0;
    if os.path.exists(os.getcwd()+"\\IMG")==False:
        os.mkdir(os.getcwd()+"\\IMG")
   
    for k in i1:
        w+=1;
        # verify=False 取消认证
        img=requests.get(k,headers=headers,verify=False).content
        with open(os.getcwd()+'\\IMG\\'+str(w)+'.jpg','wb') as fps:
            fps.write(img)
        # print(img)
