from job_search import job_page, job_info
from save_job import save_file


result = job_info(job_page())
save_file(result)
