# -*- coding: utf-8 -*-
# env: python 2.7 & Mac OS
# 抓取应用宝页面上应用信息: http://sj.qq.com
import re
import string
import sys
import os
import urllib
import json
from codes import apkNames

def crawl(apkName):
  url = "http://sj.qq.com/myapp/detail.htm?apkName=" + apkName
  parserHtml = urllib.urlopen(url).read()
  regImg = re.search(r'class="det-icon">\s*?<img\s+?src="(.+?)"', parserHtml)
  regName = re.search(r'class="det-name-int">(.+?)</div', parserHtml)
  if regImg and regName:
    res = {
      'code': apkName,
      'img': regImg.groups()[0],
      'name': regName.groups()[0]
    }
    return res
  else:
    return None

def main():
  apkInfos = []
  for apkName in apkNames:
    apkInfo = crawl(apkName)
    if apkInfo:
      apkInfos.append(apkInfo)
  dumpStr = json.dumps(apkInfos, sort_keys = True, indent = 2)
  f = open(os.path.join(sys.path[0], 'apps.json'), 'w')
  f.write(dumpStr)
  f.close()
  print dumpStr

if __name__ == '__main__':
  main()
