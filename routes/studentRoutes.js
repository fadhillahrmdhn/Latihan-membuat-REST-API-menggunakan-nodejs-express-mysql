const express = require('express');
const {
  getAllStudents,createStudent,getStudent,deleteStudent,updateStudent
}=require('../controllers/studentController');

const router = express.Router();

router.route('/').get(getAllStudents).post(createStudent);

router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
