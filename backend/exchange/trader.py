from dataclasses import dataclass

from .countervalue import ETH, XRP, Amount, Unit
from .crypto import Vault


@dataclass
class Convert:
    incoming: Amount
    outgoing: Amount = None

    def to(self, unit: Unit) -> "Convert":
        self.outgoing = self.incoming * unit
        return self

    def wait_for_incoming(self, address: str, transaction_hash: str):
        while True:
            tx = Vault().get_tx_from_address(address, transaction_hash, self.incoming)
            if tx:
                return tx

    def send_to(self, address: str):
        """
        CAUTION: Concurrent transactions are NOT supported.
        """
        return Vault().send(self.outgoing).to(address)
