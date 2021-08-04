FROM python:3.7-slim

WORKDIR /app

ADD . /app

RUN pip install --trusted-host pypi.python.org -r requirements.txt

ENV GOOGEL_APPLICATION_CREDENTIALS="\GCP_트위터 스트리밍 데이터 수집\gcp-study-321416-0fe5cf02bfff.json"

# RUN app.py when the container launches
CMD ["pyhon", "twc2.py"]