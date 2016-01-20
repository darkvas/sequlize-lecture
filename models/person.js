// Created by andrey on 19.01.16.

"use strict";

var Sequelize = require('sequelize');

module.exports = function (pgSequelize) {

    var PersonModel = pgSequelize.define('person', {
        id        : {
            type         : Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey   : true
        },
        firstName : {
            type : Sequelize.STRING,
            field: 'first_name'
        },
        lastName  : {
            type : Sequelize.STRING,
            field: 'last_name'
        },
        email     : {
            type    : Sequelize.STRING,
            unique  : true,
            validate: {
                isEmail: {
                    msg: "Ololololo - bad email :("
                }
            }
        },
        profession: {
            type: Sequelize.STRING,
            set : function (val) {
                this.setDataValue('profession', val.toUpperCase());
            }
        }
    }, {
        //timestamps     : true,
        //underscored    : true,
        //paranoid       : true,
        //freezeTableName: true,
        //tableName      : 'my_very_custom_person'
        getterMethods: {
            fullName: function () {
                return this.firstName + ' ' + this.lastName
            }
        },

        setterMethods: {
            fullName: function (value) {
                var names = value.split(' ');

                this.setDataValue('firstName', names.slice(0, -1).join(' '));
                this.setDataValue('lastName', names.slice(-1).join(' '));
            }
        },

        instanceMethods: {
            //...
        }
    });

    return PersonModel;
};