import os
from dataclasses import dataclass
from enum import Enum

from ripple_api import RippleDataAPIClient, RippleRPCClient
from web3 import HTTPProvider, Web3
from web3.middleware import geth_poa_middleware

from .countervalue import ETH, XRP, Amount, Unit, drops, wei


# EIP 155
class EthereumNetwork(Enum):
    MAINNET = 1
    ROPSTEN = 3
    RINKEBY = 4
    GOERLI = 5


# initialize web3 instance
INFURA_PROJECT_ID = os.environ["INFURA_PROJECT_ID"]

w3 = Web3(
    Web3.HTTPProvider(
        f"https://{EthereumNetwork.GOERLI.name.lower()}.infura.io/v3/{INFURA_PROJECT_ID}"
    )
)
w3.middleware_onion.inject(geth_poa_middleware, layer=0)

eth_key = os.environ["ETHEREUM_PRIVATE_KEY"]
eth_account = w3.eth.account.from_key(eth_key)

rippled = RippleRPCClient("https://s.altnet.rippletest.net:51234")
ripple_key = os.environ["RIPPLE_SEED"]
ripple_address = os.environ["RIPPLE_ADDRESS"]


@dataclass
class Vault:
    # This is a crime against humanity. Consider using https://vaultplatform.ledger.com
    amount: Amount = None

    def send(self, amount: Amount):
        if amount >= self.eth_reserve:
            raise OverflowError

        self.amount = amount
        return self

    @property
    def eth_reserve(self) -> Amount:
        balance = w3.eth.getBalance(eth_account.address)
        return balance * wei

    def balance_of(self, address: str, unit: Unit) -> Amount:
        if unit in (wei, ETH):
            balance = w3.eth.getBalance(address) * wei
            return balance * unit
        elif unit in (drops, XRP):
            account_info = rippled.account_info(address)
            balance = account_info.get("account_data", {}).get("Balance", 0)
            balance = int(balance) * drops
            return balance * unit

    def to(self, address: str):
        if self.amount.unit == wei:
            return self._send_to_ethereum_address(address)
        elif self.amount.unit == drops:
            return self._send_to_ripple_address(address)

    def _send_to_ethereum_address(self, address: str):
        next_nonce = w3.eth.getTransactionCount(eth_account.address)
        transaction = {
            "to": address,
            "value": self.amount.value,
            "gas": 21000,  # standard gas limit for ETH transactions
            "gasPrice": 1000000000,  # hard-coded for simplicity
            "nonce": next_nonce,
            "chainId": EthereumNetwork.GOERLI,
        }

        signed = eth_account.sign_transaction(transaction)
        return w3.eth.sendRawTransaction(signed.rawTransaction)

    @staticmethod
    def get_tx_from_address(address: str, amount: Amount):
        amount_in_drops = amount * drops

        txs = rippled.account_tx(ripple_address)
        for tx in txs["transactions"]:
            data = tx["tx"]
            if data["Account"] == address and data["Amount"] == str(
                amount_in_drops.value
            ):
                return data["hash"]

    def _send_to_ripple_address(self, address: str):
        raise NotImplementedError
