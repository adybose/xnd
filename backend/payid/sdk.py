import os
from dataclasses import dataclass
from typing import Optional

import requests

from .models import PayIDNetwork


@dataclass
class PayIDServer:
    username: str

    __url_host = os.environ["XND_BACKEND_HOST"]
    __payid_host = os.environ["XND_PAYID_HOST"]

    @property
    def read_headers(self) -> dict:
        return {"PayID-Version": "1.0"}

    @property
    def write_headers(self) -> dict:
        return {"PayID-API-Version": "2020-06-18", "Content-Type": "application/json"}

    def get_address_by_currency(self, currency: PayIDNetwork) -> Optional[str]:
        url = f"{self.__url_host}:8080/{self.username}"
        headers = {**self.read_headers, **currency.headers}

        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return

        resource = response.json()
        addresses = resource["addresses"]
        if addresses:
            return addresses[0]["addressDetails"]["address"]

    def add_address(self, address: str, currency: PayIDNetwork) -> None:
        if self.get_address_by_currency(currency):
            raise PermissionError("Only one address allowed for a payid")

        url = f"{self.__url_host}:8081/users"

        payload = {
            "payId": f"{self.username}${self.__payid_host}",
            "addresses": [
                {
                    "paymentNetwork": currency.code,
                    "environment": currency.environment,
                    "details": {"address": address},
                }
            ],
        }

        response = requests.post(url, json=payload, headers=self.write_headers)
        response.raise_for_status()

    def delete(self) -> None:
        url = f"{self.__url_host}:8081/users/{self.username}${self.__payid_host}"

        response = requests.delete(url, headers=self.write_headers)
        response.raise_for_status()
