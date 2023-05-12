const express = require('express');
const app = express();
const port = 3000;

// Endpoint POST untuk mendapatkan data biodata
app.post('/biodata', (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.query;

  const biodata = {
    nama: nama,
    tempatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  };

  res.send(biodata);
});

// Endpoint GET untuk mendapatkan data biodata
app.get('/biodata', (req, res) => {
  const { nama, tempatLahir, tanggalLahir, alamat } = req.query;

  const biodata = {
    nama: nama,
    tempatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  };

  res.send(biodata);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
