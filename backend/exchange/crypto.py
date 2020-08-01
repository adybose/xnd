import os
from dataclasses import dataclass
from enum import Enum

from web3 import HTTPProvider, Web3
from web3.middleware import geth_poa_middleware

from .countervalue import ETH, XRP, Amount, Unit, drops, wei


# EIP 155
class EthereumNetwork(Enum):
    MAINNET = 1
    ROPSTEN = 3
    RINKEBY = 4
    GOERLI = 5


@dataclass
class Vault:
    # This is a crime against humanity. Consider using https://vaultplatform.ledger.com
    amount: Amount = None

    # initialize web3 instance
    INFURA_PROJECT_ID = os.environ["INFURA_PROJECT_ID"]

    w3 = Web3(
        Web3.HTTPProvider(
            f"https://{EthereumNetwork.GOERLI.name.lower()}.infura.io/v3/{INFURA_PROJECT_ID}"
        )
    )
    w3.middleware_onion.inject(geth_poa_middleware, layer=0)

    key = os.environ["ETHEREUM_PRIVATE_KEY"]
    account = w3.eth.account.from_key(key)

    def send(self, amount: Amount):
        if amount >= self.eth_reserve:
            raise OverflowError

        self.amount = amount
        return self

    @property
    def eth_reserve(self) -> Amount:
        balance = self.w3.eth.getBalance(self.account.address)
        return balance * wei

    def balance_of(self, address: str, unit: Unit) -> Amount:
        if unit in (wei, ETH):
            balance = self.w3.eth.getBalance(address) * wei
            return balance * unit
        elif unit in (drops, XRP):
            raise NotImplementedError

    def to(self, address: str):
        if self.amount.unit == wei:
            return self._send_to_ethereum_address(address)
        elif self.amount.unit == drops:
            return self._send_to_ripple_address(address)

    def _send_to_ethereum_address(self, address: str):
        next_nonce = self.w3.eth.getTransactionCount(self.account.address)
        transaction = {
            "to": address,
            "value": self.amount.value,
            "gas": 21000,  # standard gas limit for ETH transactions
            "gasPrice": 1000000000,  # hard-coded for simplicity
            "nonce": next_nonce,
            "chainId": EthereumNetwork.GOERLI,
        }

        signed = self.account.sign_transaction(transaction)
        return self.w3.eth.sendRawTransaction(signed.rawTransaction)

    def _send_to_ripple_address(self, address: str):
        raise NotImplementedError
