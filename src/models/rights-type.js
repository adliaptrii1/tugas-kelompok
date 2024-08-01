const { Sequelize } = require('sequelize');
const db = require('../config/database');
const { unsignedDecimalNumber } = require('docx');

const { DataTypes } = Sequelize;

const RightsType = db.define('rights_type', {
    // CREATE TABLE `rights_type` (
    //     `id` int(10) UNSIGNED NOT NULL,
    //     `name` varchar(50) NOT NULL
    //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unsignedDecimalNumber: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = RightsType;