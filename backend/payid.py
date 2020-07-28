import os
from dataclasses import dataclass
from enum import Enum
from typing import Optional

import requests


class Currency(Enum):
    RIPPLE_MAINNET = 1
    RIPPLE_TESTNET = 2
    ETHEREUM_MAINNET = 3
    ETHEREUM_RINKEBY = 4

    @property
    def environment(self) -> str:
        if self in (self.RIPPLE_TESTNET, self.ETHEREUM_RINKEBY):
            return "TESTNET"

        raise NotImplementedError

    @property
    def headers(self) -> dict:
        if self == self.RIPPLE_MAINNET:
            return {"Accept": "application/xrpl-mainnet+json"}
        elif self == self.RIPPLE_TESTNET:
            return {"Accept": "application/xrpl-testnet+json"}
        elif self == self.ETHEREUM_MAINNET:
            return {"Accept": "application/eth-mainnet+json"}
        elif self == self.ETHEREUM_RINKEBY:
            return {"Accept": "application/eth-rinkeby+json"}

        raise ValueError

    @property
    def network(self) -> str:
        if self in (self.RIPPLE_TESTNET, self.RIPPLE_MAINNET):
            return "XRPL"
        elif self == (self.ETHEREUM_MAINNET, self.ETHEREUM_RINKEBY):
            return "ETH"

        raise ValueError


@dataclass
class PayIDServer:
    username: str

    __url_host = os.environ["XND_BACKEND_HOST"]
    __payid_host = os.environ["XND_PAYID_HOST"]

    @property
    def get_headers(self) -> dict:
        return {"PayID-Version": "1.0"}

    @property
    def post_headers(self) -> dict:
        return {"PayID-API-Version": "2020-06-18", "Content-Type": "application/json"}

    def get_address_by_currency(self, currency: Currency) -> Optional[str]:
        url = f"{self.__url_host}:8080/{self.username}"
        headers = {**self.get_headers, **currency.headers}

        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return

        resource = response.json()
        addresses = resource["addresses"]
        if addresses:
            return addresses[0]["addressDetails"]["address"]

    def add_address(self, address: str, currency: Currency) -> None:
        if self.get_address_by_currency(currency):
            raise PermissionError("Only one address allowed for a payid")

        url = f"{self.__url_host}:8081/users"

        payload = {
            "payId": f"{self.username}${self.__payid_host}",
            "addresses": [
                {
                    "paymentNetwork": currency.network,
                    "environment": currency.environment,
                    "details": {"address": address},
                }
            ],
        }

        response = requests.post(url, json=payload, headers=self.post_headers,)
        response.raise_for_status()
