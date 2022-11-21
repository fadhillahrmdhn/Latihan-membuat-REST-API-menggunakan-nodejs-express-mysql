const express = require('express');

const {
  getAllStudents,registerStudent,getStudent,deleteStudent,updateStudent,loginStudents
}=require('../controllers/studentController');

const router = express.Router();

router.route('/').get(getAllStudents).post(registerStudent);
router.route('/login').post(loginStudents);
router.route('/:id').get(getStudent).put(updateStudent).delete(deleteStudent);

module.exports = router;
