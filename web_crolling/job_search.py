from selenium import webdriver
from selenium.webdriver.chrome.options import Options


options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument("window-size=1920x1080")
options.add_argument("disable-gpu")

url = "https://programmers.co.kr/job?_=1595059349869&job_position%5Bmin_career%5D=&job_position%5Btags%5D%5B%5D=Python&job_position%5Btags%5D%5B%5D=Django&page"
driver = webdriver.Chrome(
    executable_path="C:\\Users\\sjb04\\Desktop\\dev\\web_crolling\\chromedriver.exe", chrome_options=options)
driver.get(url)


def job_page():
    page = driver.find_elements_by_xpath("//a[@class='page-link']")

    index_list = []

    for index in page:
        index_number = index.text
        index_list.append(index_number)

    index_list.remove("이전")
    index_list.remove("다음")

    max_page = int(index_list[-1])
    return max_page


def job_info(max):

    jobs = []
    for page in range(1, max+1):
        link = url+f'={page}'
        driver.get(link)
        print(f"{page} 스크랩 중")

        company = driver.find_elements_by_xpath("//h5[@class='company-name']")
        job_name = driver.find_elements_by_xpath(
            "//h4[@class='position-title']//a")
        location = driver.find_elements_by_xpath(
            "//ul[@class='company-info']//li[@class='location']")
        experience = driver.find_elements_by_xpath(
            "//ul[@class='company-info']//li[@class='experience']")

        for c, j, l, e in zip(company, job_name, location, experience):
            company_text = c.text
            job_name_text = j.text
            location_text = l.text
            experience_text = e.text

            job = {
                "기업": company_text,
                "주 업무": job_name_text,
                "위치": location_text,
                "경력": experience_text
            }
            jobs.append(job)
    return jobs
