import os

import requests
from flask import Flask, abort, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

CLIENT_ID = os.environ["GITHUB_CLIENT_ID"]
CLIENT_SECRET = os.environ["GITHUB_CLIENT_SECRET"]


@app.route("/authenticate/<code>")
def authenticate(code):
    # send POST request to github with code and client secret
    data = {"client_id": CLIENT_ID, "client_secret": CLIENT_SECRET, "code": code}

    url = "https://github.com/login/oauth/access_token"
    header = {"Accept": "application/json"}
    response = requests.post(url, data=data, headers=header).json()
    return jsonify(response)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)
