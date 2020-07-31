from enum import Enum


class PayIDNetwork(Enum):
    RIPPLE_MAINNET = "xrpl-mainnet"
    RIPPLE_TESTNET = "xrpl-testnet"
    ETHEREUM_MAINNET = "eth-mainnet"
    ETHEREUM_GOERLI = "eth-goerli"

    @property
    def environment(self) -> str:
        return self.value.split("-")[1].upper()

    @property
    def headers(self) -> dict:
        return {"Accept": f"application/{self.value}+json"}

    @property
    def code(self) -> str:
        return self.value.split("-")[0].lower()

    @classmethod
    def from_string(cls, currency: str) -> "PayIDNetwork":
        if currency not in {network.value for network in cls}:
            raise ValueError(f"Invalid network: {currency}")

        return cls(currency)
