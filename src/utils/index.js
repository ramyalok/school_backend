const crypto = require('crypto');
// var bcrypt = require("bcrypt");
const moment = require("moment");
// var fetch = require('node-fetch');
const sequelize = require("sequelize");
const  models = require("../../models")
const axios = require('axios');


const  dotenv = require("dotenv");
dotenv.config();

module.exports = {
    giveMeConnectionString : () => {
        let connString;
        if (process.env.NODE_ENV === "production") {
            connString = {
                host: process.env.PROD_DB_HOST,
                user: process.env.PROD_DB_USER_NAME,
                password: process.env.PROD_DB_SECRET,
                database: process.env.PROD_DB,
                port: process.env.PROD_DB_PORT
            };
        } else if (process.env.NODE_ENV === "staging") {
            connString = {
                host: process.env.STAGE_DB_HOST,
                user: process.env.STAGE_DB_USER_NAME,
                password: process.env.STAGE_DB_SECRET,
                database: process.env.STAGE_DB,
                port: process.env.STAGE_DB_PORT
            };
        } else {
            connString = {
                host: process.env.LOCAL_DB_HOST,
                user: process.env.LOCAL_DB_USER_NAME,
                password: process.env.LOCAL_DB_SECRET,
                database: process.env.LOCAL_DB,
                port: process.env.LOCAL_DB_PORT
            };
        }
        return connString;
    },
    sendOutResp :(res, status, msg, success, _data) => {
        res.json({
            status: status,
            success: success,
            message: msg,
            data: _data
        });
    },
    generateSalt : rounds => {
        if (rounds >= 15) {
            throw new Error(`${rounds} is greater than 15,Must be less that 15`);
        }
        if (typeof rounds !== 'number') {
            throw new Error('rounds param must be a number');
        }
        if (rounds == null) {
            rounds = 12;
        }
        return crypto.randomBytes(Math.ceil(rounds / 2)).toString('hex').slice(0, rounds);
    },
    hasher: (password, salt) => {
        let hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        let value = hash.digest('hex');
        return {
            salt: salt,
            hashedpassword: value
        };
    },
    hash :(password, salt) => {
        if (password == null || salt == null) {
            throw new Error('Must Provide Password and salt values');
        }
        if (typeof password !== 'string' || typeof salt !== 'string') {
            throw new Error('password must be a string and salt must either be a salt string or a number of rounds');
        }
        let hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        let value = hash.digest('hex');
        return {
            salt: salt,
            hashedpassword: value
        };
        // return this.hasher(password, salt);
    },
    compare : (password, hash) => {
        // hash = {
        //     salt: 'f844b09ff50c',
        //     hashedpassword: '2d2528d4534394d1e2702f53826d11c16ed4422f6bd466745cb4f1aa0e042b52b98fc5e65b86d73a6ce4807679b773fb955c4824b0471015354e1a872d42cb62'
        // }
        if (password == null || hash == null) {
            throw new Error('password and hash is required to compare');
        }
        if (typeof password !== 'string' || typeof hash !== 'object') {
            throw new Error('password must be a String and hash must be an Object');
        }
        let passwordData = hasher(password, hash.salt);
        if (passwordData.hashedpassword === hash.hashedpassword) {
            return true;
        }
        return false
    },
    validate_email :(mail) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(mail).toLowerCase());
    }

}