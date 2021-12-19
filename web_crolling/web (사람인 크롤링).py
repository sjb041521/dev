from bs4 import BeautifulSoup
import urllib.request

import pandas as pd
from collections import OrderedDict
# 컬럼 순서를 지정하면서 데이터 프레임을 구성


print(' 사람인 검색 순위 \n')
webpage = urllib.request.urlopen(
    'https://www.saramin.co.kr/zf_user/jobs/list/domestic?loc_mcd=101000&cat_cd=402&panel_type=&search_optional_item=n&search_done=y&panel_count=y')
toptenlist = []
artistlist = []
datalist = []
Rank = 10
soup = BeautifulSoup(webpage, 'html.parser')
for topten in soup.find_all('div', "col company_nm"):
    toptenlist.append(topten.get_text())
for artist in soup.find_all('div', "col recruit_condition"):
    artistlist.append(artist.get_text())

for i in range(Rank):
    datalist = (artistlist[i], toptenlist[i])
    df = pd.DataFrame.from_dict(datalist)
    df.to_csv(
        'C:\\Users\\sjb04\\Desktop\\dev\\web_crolling\\save_no_header.csv', header=None, mode='a', encoding="utf-8-sig")

# print(' - %2d순위  : %s - %s' % (i+1, artistlist[i], toptenlist[i]))


# csv파일로 생성
