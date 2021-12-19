import csv
import requests
from bs4 import BeautifulSoup

url = "https://programmers.co.kr/job?min_salary=&min_career=&min_employees=&order=recent&page=1"
ret = []

page_url = f"{url}"
req = requests.get(page_url)
soup = BeautifulSoup(req.text, "html.parser")
algorithm_list = soup.find(
    "div", {"class": "tab-content"}).find("div", {"class": "list-positions-wrapper"})
ret = algorithm_list.find('"div", {"class": "list-positions-header"}')
print(ret)
# for item in algorithm_list:
#     tmp = {}
#     tmp["title"] = item.find("h6", {"class": "company-name"}).string
#     ret.append(tmp)
