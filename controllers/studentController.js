const Student = require('../models/studentModel');
//@desc mengambil seluruh data mahasiswa
//@route GET /api/students
//access public
exports.getAllStudents = async (req, res, next) => {
  try {
    const student = await Student.findAll();

    res.status(200).json({
      succes: true,
      message: 'melihat seluruh data mahasiswa',
      data: student,
    });
  } catch {
    res.status(500).json({
      succes: false,
      message: 'something went wrong',
    });
  }
};

//@desc menambahkan data mahasiswa
//@route POST /api/students
//access public
exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);

    res.status(200).json({
      succes: true,
      message: 'berhasil menambahkan data mahasiswa',
      data: student,
    });
  } catch (err) {
    res.status(400).json({
      succes: false,
      message: err.message,
    });
  }
};

//@desc melihat data satu mahasiswa
//@route GET /api/students/:id
//access public
exports.getStudent = async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        succes: false,
        message: 'data mahasiswa tidak ditemukan',
      });
    }

    res.status(200).json({
      succes: true,
      message: `melihat data mahasiswa ke-${req.params.id}`,
      data: student,
    });
  } catch (err) {
    res.status(400).json({
      succes: false,
      message: err.message,
    });
  }
};

//@desc memperbaharui data mahasiswa
//@route PUT /api/students/:id
//access public
exports.updateStudent = async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        succes: false,
        message: 'data mahasiswa tidak ditemukan',
      });
    }

    await student.update(req.body);

    res.status(200).json({
      succes: true,
      message: `data berhasil diperbaharui data mahasiswa`,
      data:student
    });
  } catch (err) {
    res.status(400).json({
      succes: false,
      message: err.message,
    });
  }
};

//@desc memhapus data mahasiswa
//@route DELETE /api/students/:id
//access public
exports.deleteStudent = (req, res, next) => {
  try {
  } catch (err) {}
  res.status(200).json({
    succes: true,
    message: `menghapus data mahasiswa ke-${req.params.id}`,
  });
};
