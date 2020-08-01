from flask import Flask, abort, jsonify
from flask_cors import CORS

from exchange import ETH, XRP, Vault
from payid import PayIDNetwork, PayIDServer

app = Flask(__name__)
cors = CORS(app)


@app.route("/<username>")
def get_address(username: str):
    server = PayIDServer(username=username)

    for network in PayIDNetwork:
        address = server.get_address_by_network(network)
        if address:
            balance = Vault().balance_of(
                address, ETH if network.ticker == "ETH" else XRP
            )
            return jsonify(
                {
                    "address": address,
                    "network": network.value,
                    "currency": network.currency,
                    "code": network.code,
                    "environment": network.environment,
                    "ticker": network.ticker,
                    "balance": str(balance),
                }
            )

    abort(404)


@app.route("/<username>")
def delete(username: str):
    server = PayIDServer(username=username)
    server.delete()
    return jsonify(success=True)


@app.route("/transfer")
def transfer():
    ...


if __name__ == "__main__":
    app.run(port=9001, debug=True)
