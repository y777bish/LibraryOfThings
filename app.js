const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Strona główna
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Strona logowania
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Obsługa formularza logowania
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Tutaj możesz przeprowadzić proces uwierzytelniania (np. sprawdzić w bazie danych)

  // Przykładowe uwierzytelnianie
  if (username === 'example' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Login failed. Check your username and password.');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});