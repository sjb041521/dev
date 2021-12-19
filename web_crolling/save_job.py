import pandas as pd


def save_file(jobs):
    save = pd.DataFrame(jobs)
    save = save[['기업', '주 업무', '위치', '경력']]
    save.head()
    save.to_csv(
        "C:\\Users\\sjb04\\Desktop\\dev\\web_crolling\\save_no_header.csv")
