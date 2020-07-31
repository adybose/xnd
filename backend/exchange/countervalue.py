from dataclasses import dataclass

from pycoingecko import CoinGeckoAPI

cg = CoinGeckoAPI()


@dataclass
class Unit:
    name: str
    multiplier: int = 1
    base: "Unit" = None

    def __rmul__(self, amount: float) -> "Amount":
        return Amount(
            value=int(amount * self.multiplier),
            unit=self if self.multiplier == 1 else self.base,
        )

    def __truediv__(self, other: "Unit") -> float:
        """
        This allows the user to query the exchange rate between two units.
        """
        # ETH / wei
        # XRP / drops
        if self.base == other:
            return self.multiplier * 1.0

        # wei / ETH
        # drops / XRP
        elif self == other.base:
            return 1.0 / (other / self)

        # wei / wei
        # XRP / XRP
        elif self == other:
            return 1.0

        # ETH / XRP
        # wei / XRP
        # ETH / drops
        # wei / drops
        elif self in (ETH, wei) and other in (XRP, drops):
            eth_to_xrp_rate = cg.get_price(ids="ethereum", vs_currencies="xrp")[
                "ethereum"
            ]["xrp"]

            # Add your commission here. ;)

            in_wei = (1 * self).value
            in_drops = (1 * other).value
            return (
                (in_wei / in_drops)
                * eth_to_xrp_rate
                / (ETH.multiplier / XRP.multiplier)
            )

        # drops / wei
        # drops / ETH
        # XRP / wei
        # XRP / ETH
        elif self in (XRP, drops) and other in (ETH, wei):
            return 1.0 / (other / self)

        raise NotImplementedError


@dataclass
class Amount:
    value: float
    unit: Unit

    def __repr__(self):
        return f"{self.value} {self.unit.name}"

    def __mul__(self: "Amount", other: Unit) -> "Amount":
        ratio = self.unit / other
        value_in_other = self.value * ratio
        return Amount(value=value_in_other, unit=other)

    def __gt__(self, other: "Amount"):
        if self.unit != other.unit:
            raise TypeError

        return self.value > other.value

    def __ge__(self, other: "Amount"):
        if self.unit != other.unit:
            raise TypeError

        return self.value >= other.value

    def __lt__(self, other: "Amount"):
        if self.unit != other.unit:
            raise TypeError

        return self.value < other.value

    def __le__(self, other: "Amount"):
        if self.unit != other.unit:
            raise TypeError

        return self.value <= other.value


drops = Unit("drops")
XRP = Unit("XRP", multiplier=1000000, base=drops)
wei = Unit("wei")
ETH = Unit("ETH", multiplier=1000000000000000000, base=wei)

if __name__ == "__main__":
    import doctest

    doctest.testmod()
