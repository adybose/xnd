from flask import Flask, jsonify
from flask_cors import CORS

from payid import PayIDNetwork, PayIDServer

app = Flask(__name__)
cors = CORS(app)


@app.route("/<username>/<currency>")
def get_address(username: str, currency: str):
    server = PayIDServer(username=username)

    currency = PayIDNetwork.from_string(currency)
    address = server.get_address_by_currency(currency=currency)
    return jsonify({"address": address})


@app.route("/transfer")
def transfer():
    ...


if __name__ == "__main__":
    app.run(port=9001, debug=True)
