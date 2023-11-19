import board
import busio
from digitalio import DigitalInOut
import adafruit_pn532.spi as PN532_SPI

# Konfiguracja interfejsu SPI
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs_pin = DigitalInOut(board.D5)
pn532 = PN532_SPI.PN532_SPI(spi, cs_pin, debug=False)

# Inicjalizacja PN532
ic, ver, rev, support = pn532.firmware_version
print("Wersja oprogramowania PN532: {0}.{1}".format(ver, rev))

pn532.SAM_configuration()

print("Gotowy do odczytu kart!")

while True:
    # Sprawdź czy karta jest w zasięgu
    uid = pn532.read_passive_target(timeout=0.5)
    
    # Jeśli karta została odczytana
    if uid is not None:
        print("Karta jest odczytywana")
