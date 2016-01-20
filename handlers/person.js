// Created by andrey on 19.01.16.

"use strict";
var async = require('async');

var PersonHandler = function (app) {

    var pgSequelize = app.get('seq');
    var Person = pgSequelize.Models.Person;
    var Tepluchka = pgSequelize.Models.Tepluchka;

    this.createPerson = function (req, res, next) {
        var options = req.body;

        async.waterfall([

            function (wCb) {
                var saveData = {
                    firstName : options.firstName,
                    lastName  : options.lastName,
                    email     : options.email,
                    profession: options.profession
                };

                Person
                    .create(saveData)
                    .then(function (result) {
                            wCb(null, result);
                        }
                    )
                    .catch(function (err) {
                        return wCb(err);
                    })
            },

            function (userModel, wCb) {
                var saveData = {
                    user_id: userModel.id,
                    address: options.address,
                    height : options.height
                };

                Tepluchka
                    .create(saveData)
                    .then(function (resultModel) {
                            wCb(null, userModel, resultModel);
                        }
                    )
                    .catch(function (err) {
                        return wCb(err);
                    })
            }

        ], function (error, userModel, teploModel) {
            var result = {
                user     : userModel,
                tepluchka: teploModel
            };

            if (error) {
                return next(error);
            }

            res.status(200).send(result);
        })
    };

    this.getAll = function (req, res, next) {
        Person
            .findAll({
                include: [{
                    model: Tepluchka,
                    where: {height: {$gt: 24}}
                }]
            })
            .then(function (result) {

                res.status(200).send(result);

            })
            .catch(function (error) {

                return next(error);

            })
    };

    this.forTest = function (req, res, next) {
        var id = req.body.id;
        Person
            .findById(id)
            .then(function(result){
                result
                    .getTepluchka()
                    .then(function(oO){
                        console.log(oO)
                    });
            })
            .catch(function(error){
                console.log(error);
            })

    }

};

module.exports = PersonHandler;
