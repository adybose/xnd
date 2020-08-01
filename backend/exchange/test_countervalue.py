import pytest

from .countervalue import ETH, XRP, Unit, cg, drops, wei


@pytest.fixture(autouse=True)
def mock_ext_api_call(mocker):
    mocker.patch.object(cg, "get_price", return_value={"ethereum": {"xrp": 1349}})


@pytest.mark.parametrize(
    "numerator, denominator, expected",
    [
        (ETH, wei, 10 ** 18),
        (wei, ETH, 10 ** -18),
        (wei, drops, 1.349e-09),
        (wei, XRP, 1.349e-15),
        (XRP, wei, 741289844329132.6),
        (drops, ETH, 7.412898443291327e-10),
    ],
)
def test_unit_conversion(numerator: Unit, denominator: Unit, expected: float):
    assert (numerator / denominator) == expected


def test_unit_conversion_chain():
    assert (wei / XRP) * (XRP / ETH) * (ETH / drops) * (drops / wei) == 1.0
    assert (drops / ETH) * (wei / XRP) * (ETH / XRP) * (XRP / drops) * (
        XRP / wei
    ) == 1.0


@pytest.mark.parametrize(
    "value, network, target, expected",
    [
        (1, ETH, XRP, 1349.0),
        (5, ETH, XRP, 6745.0),
        (1, ETH, wei, 1e18),
        (2, XRP, wei, 1482579688658265.2),
    ],
)
def test_amount_conversion(value, currency, target, expected):
    actual_amount = value * currency * target
    assert actual_amount.value == expected
    assert actual_amount.unit == target
