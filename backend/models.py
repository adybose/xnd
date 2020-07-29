from enum import Enum


class Network(Enum):
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
    def short_name(self) -> str:
        if self in (self.RIPPLE_TESTNET, self.RIPPLE_MAINNET):
            return "XRPL"
        elif self in (self.ETHEREUM_MAINNET, self.ETHEREUM_RINKEBY):
            return "ETH"

        raise ValueError
