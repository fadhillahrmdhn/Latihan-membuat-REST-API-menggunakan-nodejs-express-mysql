const Student = require('../models/studentModel');
const crypto = require('crypto');


const getHashedPassword = (password) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(password).digest('base64');
  return hash;
}
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

//@desc login
//@route post /api/students/login
//access public
exports.loginStudents = async (req, res, next) => {
  try {
  const { email, password } = req.body;
  const hashedPassword = getHashedPassword(password);

  const user = await Student.findOne({
    where: {
      email: email,
      password: hashedPassword
    }
  });
  if(!user){
    res.status(402).json({
        success: false,
        message:'email atau password anda salah'
    })
  }else{
    res.status(200).json({
        success: true,
        data: user,
    })
 }
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
exports.registerStudent = async (req, res, next) => {
  try {

 const hashedPassword = getHashedPassword(req.body.password);
    const student = await Student.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
  })
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
exports.deleteStudent = async(req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);

    if (!student) {
      return res.status(404).json({
        succes: false,
        message: 'data mahasiswa tidak ditemukan',
      });
    }

    await student.destroy();

    res.status(200).json({
    succes: true,
    message: `data mahasiswa berhasil terhapus`,
  });
  } catch (err) {
    res.status(400).json({
    succes: false,
    message: err.message,
  });
  }

};
