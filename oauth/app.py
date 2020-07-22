import json
import os

import requests
from flask import Flask, abort, jsonify

app = Flask(__name__)

CLIENT_ID = "e0b192fcc3e5b7cb1462"
CLIENT_SECRET = os.environ["GITHUB_CLIENT_SECRET"]


@app.route("/authenticate/<code>")
def authenticate(code):
    # send POST request to github with code and client secret
    data = {"client_id": CLIENT_ID, "client_secret": CLIENT_SECRET, "code": code}

    url = "https://github.com/login/oauth/access_token"
    header = {"Accept": "application/json"}
    response = requests.post(url, data=json.dumps(data), headers=header).json()

    if "error" in response:
        abort(401)

    return jsonify({"accessToken": response["access_token"]})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9000)
