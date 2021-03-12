import re
if __name__=='__main__':
    pass
    str='aabb%dc'
    print(str)
    newStr=format(str%1)
    print(newStr)
    print(re.findall('a{2}',newStr))