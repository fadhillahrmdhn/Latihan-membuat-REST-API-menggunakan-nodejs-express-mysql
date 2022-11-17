const {DataTypes, UUIDV4} = require('sequelize')
const sequelize = require('../utils/database')

const student = sequelize.define('student',{
    id:{
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue:UUIDV4,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    nim:{
        type:DataTypes.STRING,
        allowNull:false
    },
    jurusan:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ipk:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
},{
    underscored:true
});

module.exports=student;