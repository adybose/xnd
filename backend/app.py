from flask import Flask, jsonify
import requests


# TODO: Add methods to store PayId account details like payid and addresses to reduce number of requests
# TODO: Add POST request to add addresses

app = Flask(__name__)


@app.route('/')
def index():
    # response = requests.get('https://api.github.com')
    # print(response)
    # print(response.json())
    return "Hello, World!"


@app.route('/<user>')
def get_payid_response(username):
    url = f"http://xnd.money:8080/{username}"
    header = {
        "PayID-Version": "1.0",
        "Accept": "application/xrpl-testnet+json"}
    response = requests.get(url, headers=header).json()
    payid = response.get("payId")
    addresses = response.get("addresses")
    print("PayId; ", payid, "Addresses: ", addresses)
    return jsonify(response)


if __name__ == '__main__':
    app.run(port=9001, debug=True)