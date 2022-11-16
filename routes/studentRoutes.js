const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    succes: 'true',
    message: 'melihat seluruh data mahasiswa',
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    succes: 'true',
    message: 'menambahkan data mahasiswa',
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    succes: 'true',
    message: `melihat data mahasiswa ke-${req.params.id}`,
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    succes: 'true',
    message: `memperbaharui data mahasiswa ke-${req.params.id}`,
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    succes: 'true',
    message: `menghapus data mahasiswa ke-${req.params.id}`,
  });
});

module.exports = router;
