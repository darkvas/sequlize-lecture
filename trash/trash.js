// Created by andrey on 19.01.16.

var Foo = sequelize.define('foo', {
    // instantiating will automatically set the flag to true if not set
    flag: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},

    // default values for dates => current time
    myDate: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},

    // setting allowNull to false will add NOT NULL to the column, which means an error will be
    // thrown from the DB when the query is executed if the column is null. If you want to check that a value
    // is not null before querying the DB, look at the validations section below.
    title: {type: Sequelize.STRING, allowNull: false},

    // Creating two objects with the same value will throw an error. The unique property can be either a
    // boolean, or a string. If you provide the same string for multiple columns, they will form a
    // composite unique key.
    someUnique: {type: Sequelize.STRING, unique: true},
    uniqueOne : {type: Sequelize.STRING, unique: 'compositeIndex'},
    uniqueTwo : {type: Sequelize.INTEGER, unique: 'compositeIndex'},

    // Go on reading for further information about primary keys
    identifier: {type: Sequelize.STRING, primaryKey: true},

    // autoIncrement can be used to create auto_incrementing integer columns
    incrementMe: {type: Sequelize.INTEGER, autoIncrement: true},

    // Comments can be specified for each field for MySQL and PG
    hasComment: {type: Sequelize.INTEGER, comment: "I'm a comment!"},

    // You can specify a custom field name via the "field" attribute:
    fieldWithUnderscores: {type: Sequelize.STRING, field: "field_with_underscores"},

    // It is possible to create foreign keys:
    bar_id: {
        type: Sequelize.INTEGER,

        references: {
            model     : SomeModel,  // This is a reference to another model
            key       : 'id',       // This is the column name of the referenced model
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE // This declares when to check the foreign key constraint. PostgreSQL only.
        }
    }
});
