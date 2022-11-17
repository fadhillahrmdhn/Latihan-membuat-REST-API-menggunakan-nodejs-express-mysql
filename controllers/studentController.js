//@desc mengambil seluruh data mahasiswa
//@route GET /api/students
//access public
exports.getAllStudents=(req,res,next)=>{
    res.status(200).json({
        succes: 'true',
        message: 'melihat seluruh data mahasiswa',
        middleware: req.hello,
      });
}

//@desc menambahkan data mahasiswa
//@route POST /api/students
//access public
exports.createStudent=(req,res,next)=>{
    res.status(200).json({
        succes: 'true',
        message: 'menambahkan data mahasiswa',
      });
}

//@desc melihat data satu mahasiswa
//@route GET /api/students/:id
//access public
exports.getStudent=(req,res,next)=>{
    res.status(200).json({
        succes: 'true',
        message: `melihat data mahasiswa ke-${req.params.id}`,
      });
}

//@desc memperbaharui data mahasiswa
//@route PUT /api/students/:id
//access public
exports.updateStudent=(req,res,next)=>{
    res.status(200).json({
        succes: 'true',
        message: `memperbaharui data mahasiswa ke-${req.params.id}`,
      });
}

//@desc memhapus data mahasiswa
//@route DELETE /api/students/:id
//access public
exports.deleteStudent=(req,res,next)=>{
    res.status(200).json({
        succes: 'true',
        message: `menghapus data mahasiswa ke-${req.params.id}`,
      });
}


