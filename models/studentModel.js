const {DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../utils/database')
const bcrypt = require("bcrypt");

const student = sequelize.define('students',{
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:UUIDV4,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
       },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
       },
},{
    underscored:true,
});



module.exports=student;