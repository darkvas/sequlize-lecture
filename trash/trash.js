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
    fieldWithUnderscores: {type: Sequelize.STRING, field: "field_with_underscores"}
});

// ---------------------------------------


var ValidateMe = sequelize.define('foo', {
    foo: {
        type: Sequelize.STRING,
        validate: {
            is: ["^[a-z]+$",'i'],     // will only allow letters
            //is: /^[a-z]+$/i,          // same as the previous example using real RegExp
            not: ["[a-z]",'i'],       // will not allow letters
            isEmail: true,            // checks for email format (foo@bar.com)
            isUrl: true,              // checks for url format (http://foo.com)
            isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
            isIPv4: true,             // checks for IPv4 (129.89.23.1)
            isIPv6: true,             // checks for IPv6 format
            isAlpha: true,            // will only allow letters
            isAlphanumeric: true      // will only allow alphanumeric characters, so "_abc" will fail
            isNumeric: true           // will only allow numbers
            isInt: true,              // checks for valid integers
            isFloat: true,            // checks for valid floating point numbers
            isDecimal: true,          // checks for any numbers
            isLowercase: true,        // checks for lowercase
            isUppercase: true,        // checks for uppercase
            notNull: true,            // won't allow null
            isNull: true,             // only allows null
            notEmpty: true,           // don't allow empty strings
            equals: 'specific value', // only allow a specific value
            contains: 'foo',          // force specific substrings
            notIn: [['foo', 'bar']],  // check the value is not one of these
            isIn: [['foo', 'bar']],   // check the value is one of these
            notContains: 'bar',       // don't allow specific substrings
            len: [2,10],              // only allow values with length between 2 and 10
            isUUID: 4,                // only allow uuids
            isDate: true,             // only allow date strings
            isAfter: "2011-11-05",    // only allow date strings after a specific date
            isBefore: "2011-11-05",   // only allow date strings before a specific date
            max: 23,                  // only allow values
            min: 23,                  // only allow values >= 23
            isArray: true,            // only allow arrays
            isCreditCard: true,       // check for valid credit card numbers

            // custom validations are also possible:
            isEven: function(value) {
                if(parseInt(value) % 2 != 0) {
                    throw new Error('Only even values are allowed!')
                    // we also are in the model's context here, so this.otherField
                    // would get the value of otherField if it existed
                }
            }
        }
    }
});

// -------------------------------------------------------