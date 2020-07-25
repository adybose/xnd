FROM python:3.8

WORKDIR /code

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv install

COPY app.py ./

CMD ["pipenv", "run", "prod"]

EXPOSE 9000
