var express = require('express');

var app = express();

var port = process.env.PORT || 3030;

var Sequelize = require("sequelize");
var sequelize = new Sequelize('sequelizeDB', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

app.set('seq', sequelize);

var Model = require('./models/index');
sequelize.Models = new Model(sequelize);

require('./routes')(app);

app.listen(port, function () {

    app.use(express.static(__dirname + '/public'));

    console.log("Express server listening on port " + port);
    console.log("HOST: " + "http://localhost:" + port);
});
