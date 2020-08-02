from flask import Flask, abort, jsonify, request
from flask_cors import CORS

from exchange import ETH, XRP, Vault
from exchange.trader import Convert
from payid import PayIDNetwork, PayIDServer

app = Flask(__name__)
cors = CORS(app)


def _get_address(username):
    server = PayIDServer(username=username)
    for network in PayIDNetwork:
        address = server.get_address_by_network(network)
        if address:
            balance = Vault().balance_of(
                address, ETH if network.ticker == "ETH" else XRP
            )
            return {
                "address": address,
                "network": network.value,
                "currency": network.currency,
                "code": network.code,
                "environment": network.environment,
                "ticker": network.ticker,
                "balance": str(balance),
            }


@app.route("/<username>")
def get_address(username: str):
    address = _get_address(username)
    if address:
        return jsonify(address)

    abort(404)


@app.route("/<username>", methods=["POST"])
def add_address(username: str):
    data = request.get_json()
    server = PayIDServer(username=username)

    network = PayIDNetwork(data["network"])
    server.add_address(data["address"], network)
    return get_address(username)


@app.route("/<username>", methods=["DELETE"])
def delete(username: str):
    server = PayIDServer(username=username)
    server.delete()
    return jsonify(success=True)


@app.route("/rate/<source>/<destination>")
def rate(source: str, destination: str):
    mapping = {"ETH": ETH, "XRP": XRP}

    source, destination = mapping[source], mapping[destination]

    return jsonify({"rate": source / destination})


@app.route("/transfer", methods=["POST"])
def transfer():
    data = request.get_json()
    destination_pay_id = data["destinationPayId"]
    amount = data["amount"]  # in XRP / ETH

    source, destination = data["sourceTicker"], data["destinationTicker"]
    mapping = {"ETH": ETH, "XRP": XRP}
    source, destination = mapping[source], mapping[destination]

    destination_username = destination_pay_id.split("$")[0]
    destination_address = _get_address(destination_username)

    source_username = data["sourceUsername"]
    source_address = _get_address(source_username)

    trade = Convert(amount * source).to(ETH)
    trade.wait_for_incoming()
    try:
        tx_hash = trade.send_to(destination_address)
    except:
        # Reverse the transaction in case of exception.
        # Sorry for your fees.
        Convert(amount * source).send_to(source_address)
        abort(500)
    else:
        return jsonify({"txHash": tx_hash})


if __name__ == "__main__":
    app.run(port=9001, debug=True)
