const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

const port = new SerialPort('/dev/ttyACM0', { baudRate: 115200 });  // Zmień port na odpowiedni
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on('open', () => {
    console.log('Port opened');

    // Konfiguracja modułu PN532 (zależna od biblioteki i modułu)
    // ...

    console.log('Waiting for RFID/NFC card...');
});

parser.on('data', data => {
    // Przetwarzanie odczytanych danych (zależne od biblioteki i modułu)
    console.log('Data received:', data);
});
