import pandas as pd
from collections import OrderedDict
# 컬럼 순서를 지정하면서 데이터 프레임을 구성
friend_ordered_dict = OrderedDict([('name', ['John', 'Nate']), ('age', [
                                  25, 30]), ('job', ['student', 'teacher']), ])
df = pd.DataFrame.from_dict(friend_ordered_dict)
df.to_csv("C:\\Users\\sjb04\\Desktop\\dev\\web_crolling\\save.csv")
