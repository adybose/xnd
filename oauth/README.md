## Running OAuth server locally without Docker
- To run the OAuth server locally, install the dependencies using `pipenv install` and start the virtual environment using `pipenv shell`.

- Set the Github Client Secret as environment variable and run the server like below:
`GITHUB_CLIENT_ID=<your_client_id> GITHUB_CLIENT_SECRET=<your_client_secret> python app.py`
