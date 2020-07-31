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

    def wait_for_incoming(self):
        ...

    def send_to(self, address: str):
        """
        CAUTION: Concurrent transactions are NOT supported.
        """
        return Vault().send(self.outgoing).to(address)


trade = Convert(5000 * XRP).to(ETH)
trade.wait_for_incoming()
try:
    trade.send_to("0xdeadbeef")
except:
    # Reverse the transaction in case of exception.
    # Sorry for your fees.
    Convert(5000 * XRP).send_to("r23u43nc82")
