from flask import Flask, abort, jsonify
from flask_cors import CORS

from payid import PayIDNetwork, PayIDServer

app = Flask(__name__)
cors = CORS(app)


@app.route("/<username>")
def get_address(username: str):
    server = PayIDServer(username=username)

    for currency in PayIDNetwork:
        address = server.get_address_by_currency(currency=currency)
        if address:
            return jsonify({"address": address})

    abort(404)


@app.route("/transfer")
def transfer():
    ...


if __name__ == "__main__":
    app.run(port=9001, debug=True)
